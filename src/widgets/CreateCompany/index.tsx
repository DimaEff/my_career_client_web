import { type FC } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { LoadingButton } from '@mui/lab'
import { Card, CardContent } from '@mui/material'
import { observer } from 'mobx-react-lite'

import GridFormContainer from '@/features/confirmation/ui/GridFormContainer.tsx'
import { LOCALES } from '@/shared/lib/locales.ts'
import FormInput from '@/shared/ui/FormInput'
import { PrettyTitle } from '@/shared/ui/Typography'
import { useRootStore } from '@/stores/useRootStore.ts'
import { type CreateCompanyForm, createCompanyForm } from '@/widgets/CreateCompany/model'

interface CreateCompanyProps {
  onSubmit?: () => void
}

const CreateCompany: FC<CreateCompanyProps> = ({ onSubmit }) => {
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCompanyForm>(createCompanyForm)

  const {
    authStore: { user },
    companiesStore: { fetchCompanies, createCompany },
  } = useRootStore()

  const handleCreate = async ({ title }: CreateCompanyForm) => {
    if (user === null) {
      // eslint-disable-next-line no-useless-return
      return
    }

    await createCompany({ title }, user.id)
    await fetchCompanies(user.id)
    onSubmit?.()
  }

  return (
    <Card sx={{ maxWidth: '400px' }}>
      <CardContent>
        <PrettyTitle>{t(LOCALES.ENTER_INFORMATION_ABOUT_COMPANY)}</PrettyTitle>
        <GridFormContainer
          onSubmit={handleSubmit(handleCreate)}
          inputs={
            <FormInput label={LOCALES.TITLE} fieldError={errors.title} {...register('title')} />
          }
          buttons={<LoadingButton type={'submit'}>{t(LOCALES.CREATE_COMPANY)}</LoadingButton>}
        />
      </CardContent>
    </Card>
  )
}

export default observer(CreateCompany)
