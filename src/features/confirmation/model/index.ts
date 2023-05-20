import { sample } from 'effector'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { createForm } from 'effector-forms'
import { string } from 'yup'

import { sendPhoneConfirmationCodeFx } from '@/shared/api'
import { createRule } from '@/shared/lib'

export interface PhoneNumberForm {
  phoneNumber: string
}

export const phoneNumberForm = createForm<PhoneNumberForm>({
  fields: {
    phoneNumber: {
      init: '7',
      rules: [createRule({ name: 'phoneNumber', schema: string().required() })],
    },
  },
})

export const sendConfirmation = phoneNumberForm.formValidated

sample({
  source: phoneNumberForm.fields.phoneNumber.$value as Store<string>,
  target: sendPhoneConfirmationCodeFx,
  clock: sendConfirmation,
})
