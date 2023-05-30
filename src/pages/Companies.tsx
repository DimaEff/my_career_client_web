import { useEffect, useState } from 'react'
import { Box, Fab, Modal } from '@mui/material'
import { observer } from 'mobx-react-lite'

import CompaniesList from '@/features/companies/companyList/ui/CompanyList.tsx'
import { LOCALES } from '@/shared/lib/locales.ts'
import NotItems from '@/shared/ui/NotItems'
import { useRootStore } from '@/stores/useRootStore.ts'
import CreateCompany from '@/widgets/CreateCompany'

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

  const [open, setOpen] = useState(false)

  return (
    <>
      {companies !== null && companies.length > 0 ? (
        <CompaniesList companies={companies} />
      ) : (
        <NotItems />
      )}
      <Fab
        sx={{
          position: 'fixed',
          bottom: '50px',
          right: '50px',
        }}
        variant={'extended'}
        onClick={() => setOpen(true)}
      >
        {LOCALES.ADD_COMPANY}
      </Fab>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <CreateCompany onSubmit={() => setOpen(false)} />
        </Box>
      </Modal>
    </>
  )
}

export default observer(Companies)
