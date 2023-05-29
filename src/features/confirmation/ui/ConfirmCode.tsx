import React from 'react'
import { useParams } from 'react-router'
import { LoadingButton } from '@mui/lab'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { useForm } from 'effector-forms'
import { useStore } from 'effector-react'

import { confirmCodeForm } from '@/features/confirmation/model'
import GridFormContainer from '@/features/confirmation/ui/GridFormContainer.tsx'
import FormInput from '@/shared/ui/FormInput'
import { useRootStore } from '@/stores/useRootStore.ts'

const ConfirmCode = () => {
  // const pending = useStore(loginByPhoneNumberFx.pending)
  // const { submit } = useForm(confirmCodeForm)
  const code = useStore(confirmCodeForm.fields.code.$value)
  const { phoneNumber } = useParams()

  const {
    authStore: { authByCodeAndPhoneNumber },
  } = useRootStore()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // submit()
    if (phoneNumber !== undefined) {
      await authByCodeAndPhoneNumber(phoneNumber, code as string)
    }
  }

  return (
    <GridFormContainer
      onSubmit={onSubmit}
      inputs={<FormInput field={confirmCodeForm.fields.code} />}
      buttons={
        <LoadingButton type={'submit'} loading={false}>
          Check the code
        </LoadingButton>
      }
    />
  )
}

export default ConfirmCode
