import React from 'react'
import { Button, Grid } from '@nextui-org/react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { useForm } from 'effector-forms'

import { phoneNumberForm } from '@/features/confirmation/model'
import FormInput from '@/shared/ui/FormInput'

const PhoneNumberNotification = () => {
  const { submit } = useForm(phoneNumberForm)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    submit()
  }

  return (
    <Grid.Container>
      <form onSubmit={onSubmit}>
        <Grid>
          <FormInput field={phoneNumberForm.fields.phoneNumber} />
        </Grid>
        <Grid>
          <Button type={'submit'}>Send the confirmation</Button>
        </Grid>
      </form>
    </Grid.Container>
  )
}

export default PhoneNumberNotification
