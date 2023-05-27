import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { useForm } from 'effector-forms'
import { useStore } from 'effector-react'

import { confirmCodeForm } from '@/features/confirmation/model'
import GridFormContainer from '@/features/confirmation/ui/GridFormContainer.tsx'
import { loginByPhoneNumberFx } from '@/shared/api'
import FormInput from '@/shared/ui/FormInput'
import { LoadingButton } from '@mui/lab'

const ConfirmCode = () => {
  const pending = useStore(loginByPhoneNumberFx.pending)
  const { submit } = useForm(confirmCodeForm)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit()
  }

  return (
    <GridFormContainer
      onSubmit={onSubmit}
      inputs={<FormInput field={confirmCodeForm.fields.code} />}
      buttons={
        <LoadingButton type={'submit'} loading={pending}>
          Check the code
        </LoadingButton>
      }
    />
  )
}

export default ConfirmCode
