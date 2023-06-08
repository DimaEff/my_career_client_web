import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { LoadingButton } from '@mui/lab'

import {
  type ConfirmationCodeForm,
  confirmationCodeForm,
} from '@/features/confirmation/model/forms.ts'
import GridFormContainer from '@/features/confirmation/ui/GridFormContainer.tsx'
import { PATHS } from '@/shared/paths.ts'
import FormInput from '@/shared/ui/FormInput'
import { useRootStore } from '@/stores/useRootStore.ts'

const ConfirmCode = () => {
  const navigate = useNavigate()
  const { phoneNumber } = useParams()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmationCodeForm>(confirmationCodeForm)

  const {
    authStore: { loginByCodeAndPhoneNumber },
  } = useRootStore()

  const onSubmit = async ({ code }: ConfirmationCodeForm) => {
    if (phoneNumber !== undefined) {
      await loginByCodeAndPhoneNumber(phoneNumber, code)
      navigate(PATHS.COMPANIES)
    }
  }

  return (
    <GridFormContainer
      onSubmit={handleSubmit(onSubmit)}
      inputs={<FormInput fieldError={errors.code} {...register('code')} />}
      buttons={
        <LoadingButton type={'submit'} loading={false}>
          Check the code
        </LoadingButton>
      }
    />
  )
}

export default ConfirmCode
