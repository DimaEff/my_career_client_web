import { type FC, useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { LoadingButton } from '@mui/lab'

import { type PhoneNumberForm, phoneNumberForm } from '@/features/confirmation/model/forms.ts'
import GridFormContainer from '@/features/confirmation/ui/GridFormContainer.tsx'
import FormInput from '@/shared/ui/FormInput'
import { useRootStore } from '@/stores/useRootStore.ts'

interface PhoneNumberConfirmationProps {
  onSendCode: (data: PhoneNumberForm) => void
}

const PhoneNumberConfirmation: FC<PhoneNumberConfirmationProps> = ({ onSendCode }) => {
  const {
    authStore: { sendCodeToPhoneNumber },
  } = useRootStore()
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<PhoneNumberForm>(phoneNumberForm)

  const onSubmit = async (data: PhoneNumberForm) => {
    await sendCodeToPhoneNumber(data.phoneNumber)
    onSendCode(data)
  }

  const pn = useWatch({
    control,
    name: 'phoneNumber',
  })
  useEffect(() => {
    console.log(pn)
  }, [pn])

  return (
    <GridFormContainer
      onSubmit={handleSubmit(onSubmit)}
      inputs={<FormInput fieldError={errors.phoneNumber} {...register('phoneNumber')} />}
      buttons={
        <LoadingButton type={'submit'} loading={false}>
          Send a code
        </LoadingButton>
      }
    />
  )
}

export default PhoneNumberConfirmation
