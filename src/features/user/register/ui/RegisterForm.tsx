import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { LoadingButton } from '@mui/lab'

import GridFormContainer from '@/features/confirmation/ui/GridFormContainer.tsx'
import { type CreateUserForm, createUserForm } from '@/features/user/register/model/form.ts'
import { LOCALES } from '@/shared/lib/locales.ts'
import FormInput from '@/shared/ui/FormInput'
import { useRootStore } from '@/stores/useRootStore.ts'

const RegisterForm = () => {
  const { phoneNumber } = useParams()
  const { t } = useTranslation()

  if (phoneNumber) {
    console.error('phoneNumber is undefined')
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserForm>(createUserForm(phoneNumber as string)) // handling is above

  const {
    authStore: { registerUser },
  } = useRootStore()

  const handleCreateUser = useCallback(
    async (data: CreateUserForm) => {
      await registerUser(data)
    },
    [registerUser],
  )

  return (
    <GridFormContainer
      onSubmit={handleSubmit(handleCreateUser)}
      inputs={[
        <FormInput
          placeholder={t(LOCALES.FORM.FIELD_NAME.EMAIL) ?? ''}
          key={'email'}
          fieldError={errors.email}
          {...register('email')}
        />,
        <FormInput
          placeholder={t(LOCALES.FORM.FIELD_NAME.FIRST_NAME) ?? ''}
          key={'firstName'}
          fieldError={errors.firstName}
          {...register('firstName')}
        />,
        <FormInput
          placeholder={t(LOCALES.FORM.FIELD_NAME.SURNAME) ?? ''}
          key={'surname'}
          fieldError={errors.surname}
          {...register('surname')}
        />,
        <FormInput
          placeholder={t(LOCALES.FORM.FIELD_NAME.PHONE_NUMBER) ?? ''}
          key={'phoneNumber'}
          disabled
          fieldError={errors.phoneNumber}
          {...register('phoneNumber')}
        />,
      ]}
      buttons={<LoadingButton type={'submit'}>{t(LOCALES.REGISTER)}</LoadingButton>}
    />
  )
}

export default RegisterForm
