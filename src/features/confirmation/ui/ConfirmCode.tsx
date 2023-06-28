import { useForm } from 'react-hook-form'
import { useParams } from 'react-router'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { LoadingButton } from '@mui/lab'

import {
  type ConfirmationCodeForm,
  confirmationCodeForm,
} from '@/features/confirmation/model/forms.ts'
import GridFormContainer from '@/features/confirmation/ui/GridFormContainer.tsx'
import { REGISTER_CONFIRMATION_CODE_MODE } from '@/pages/constants.ts'
import { PATHS } from '@/shared/paths.ts'
import FormInput from '@/shared/ui/FormInput'
import { useRootStore } from '@/stores/useRootStore.ts'

const ConfirmCode = () => {
  const navigate = useNavigate()
  const { phoneNumber } = useParams()
  const [urlSearchParams] = useSearchParams()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmationCodeForm>(confirmationCodeForm)

  const {
    authStore: { loginByCodeAndPhoneNumber, checkPhoneNumber },
  } = useRootStore()

  const onSubmit = async ({ code }: ConfirmationCodeForm) => {
    if (phoneNumber === undefined) {
      return
    }

    if (urlSearchParams.get('mode') === REGISTER_CONFIRMATION_CODE_MODE) {
      await checkPhoneNumber(phoneNumber, code)
      navigate(PATHS.REGISTER.FORM(phoneNumber))
    } else {
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
