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
import { useNavigate } from 'react-router-dom'
import { PATHS } from '@/shared/paths.ts'

const ConfirmCode = () => {
  const navigate = useNavigate()
  // const pending = useStore(loginByPhoneNumberFx.pending)
  // const { submit } = useForm(confirmCodeForm)
  const code = useStore(confirmCodeForm.fields.code.$value)
  const { phoneNumber } = useParams()

  const {
    authStore: { loginByCodeAndPhoneNumber },
  } = useRootStore()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // submit()
    if (phoneNumber !== undefined) {
      await loginByCodeAndPhoneNumber(phoneNumber, code as string)
      navigate(PATHS.COMPANIES)
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
