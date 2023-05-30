import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { LoadingButton } from '@mui/lab'
import { Card, CardContent } from '@mui/material'
import { useStore } from 'effector-react'
import { observer } from 'mobx-react-lite'

import GridFormContainer from '@/features/confirmation/ui/GridFormContainer.tsx'
import { LOCALES } from '@/shared/lib/locales.ts'
import FormInput from '@/shared/ui/FormInput'
import { PrettyTitle } from '@/shared/ui/Typography'
import { useRootStore } from '@/stores/useRootStore.ts'
import { createCompanyForm } from '@/widgets/CreateCompany/model'

interface CreateCompanyProps {
  onSubmit?: () => void
}

const CreateCompany: FC<CreateCompanyProps> = ({ onSubmit }) => {
  const { t } = useTranslation()

  const {
    authStore: { user },
    companiesStore: { fetchCompanies, createCompany },
  } = useRootStore()

  const title = useStore(createCompanyForm.fields.title.$value)

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (user === null) {
      // eslint-disable-next-line no-useless-return
      return
    }

    await createCompany({ title: title as string }, user.id)
    await fetchCompanies(user.id)
    onSubmit?.()
  }

  return (
    <Card sx={{ maxWidth: '400px' }}>
      <CardContent>
        <PrettyTitle>{t(LOCALES.ENTER_INFORMATION_ABOUT_COMPANY)}</PrettyTitle>
        <GridFormContainer
          onSubmit={handleCreate}
          inputs={<FormInput label={LOCALES.TITLE} field={createCompanyForm.fields.title} />}
          buttons={<LoadingButton type={'submit'}>{t(LOCALES.CREATE_COMPANY)}</LoadingButton>}
        />
      </CardContent>
    </Card>
  )
}

export default observer(CreateCompany)
