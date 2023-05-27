import React, { type FC } from 'react'
import { LoadingButton } from '@mui/lab'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { useForm } from 'effector-forms'
import { useStore } from 'effector-react'

import { phoneNumberForm, sendCodeFx } from '@/features/confirmation/model'
import GridFormContainer from '@/features/confirmation/ui/GridFormContainer.tsx'
import { sendPhoneConfirmationCodeFx } from '@/shared/api'
import FormInput from '@/shared/ui/FormInput'

interface PhoneNumberConfirmationProps {
  onSendCode: () => void
}

const PhoneNumberConfirmation: FC<PhoneNumberConfirmationProps> = ({ onSendCode }) => {
  const pending = useStore(sendPhoneConfirmationCodeFx.pending)
  const { submit } = useForm(phoneNumberForm)
  sendCodeFx.use(onSendCode)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit()
  }

  return (
    <GridFormContainer
      onSubmit={onSubmit}
      inputs={<FormInput field={phoneNumberForm.fields.phoneNumber} />}
      buttons={
        <LoadingButton type={'submit'} loading={pending}>
          Send a code
        </LoadingButton>
      }
    />
  )
}

export default PhoneNumberConfirmation
