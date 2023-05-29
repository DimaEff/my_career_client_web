import React, { type FC } from 'react'
import { LoadingButton } from '@mui/lab'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { useForm } from 'effector-forms'
import { useStore } from 'effector-react'

import { phoneNumberForm } from '@/features/confirmation/model'
import GridFormContainer from '@/features/confirmation/ui/GridFormContainer.tsx'
import FormInput from '@/shared/ui/FormInput'
import { useRootStore } from '@/stores/useRootStore.ts'

interface PhoneNumberConfirmationProps {
  onSendCode: () => void
}

const PhoneNumberConfirmation: FC<PhoneNumberConfirmationProps> = ({ onSendCode }) => {
  // const pending = useStore(sendPhoneConfirmationCodeFx.pending)
  const { eachValid } = useForm(phoneNumberForm)
  const phoneNumber = useStore(phoneNumberForm.fields.phoneNumber.$value)

  const {
    authStore: { sendCodeToPhoneNumber },
  } = useRootStore()
  // sendCodeFx.use(onSendCode)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // submit()
    if (eachValid) {
      await sendCodeToPhoneNumber(phoneNumber as string)
      onSendCode()
    }
  }

  return (
    <GridFormContainer
      onSubmit={onSubmit}
      inputs={<FormInput field={phoneNumberForm.fields.phoneNumber} />}
      buttons={
        <LoadingButton type={'submit'} loading={false}>
          Send a code
        </LoadingButton>
      }
    />
  )
}

export default PhoneNumberConfirmation
