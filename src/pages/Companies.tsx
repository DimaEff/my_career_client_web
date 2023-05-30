import { useEffect } from 'react'
import { Fab, Stack } from '@mui/material'
import { observer } from 'mobx-react-lite'

import CompaniesList from '@/features/companies/companyList/ui/CompanyList.tsx'
import { LOCALES } from '@/shared/lib/locales.ts'
import { useRootStore } from '@/stores/useRootStore.ts'

const Companies = () => {
  const {
    authStore: { user },
    companiesStore: { fetchCompanies, companies },
  } = useRootStore()
  useEffect(() => {
    if (user === null) {
      // eslint-disable-next-line no-useless-return
      return
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchCompanies(user.id)
  }, [fetchCompanies, user])

  return (
    <>
      <Stack spacing={1}>{companies && <CompaniesList companies={companies} />}</Stack>
      <Fab
        sx={{
          position: 'fixed',
          bottom: '50px',
          right: '50px',
        }}
        variant={'extended'}
      >
        {LOCALES.ADD_COMPANY}
      </Fab>
    </>
  )
}

export default observer(Companies)
