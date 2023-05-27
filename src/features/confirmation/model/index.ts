import { combine, sample, type Store } from 'effector'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { createForm } from 'effector-forms'
import { string } from 'yup'

import {
  loginByPhoneNumberFx,
  type PhoneNumberCode,
  sendPhoneConfirmationCodeFx,
} from '@/shared/api'
import { createRule, isOnlyNumberString, ruPhoneNumberSchema, size } from '@/shared/lib'
import { createEffect } from 'effector/effector.umd'

export interface PhoneNumberForm {
  phoneNumber: string
}

export const phoneNumberForm = createForm<PhoneNumberForm>({
  fields: {
    phoneNumber: {
      init: '7',
      rules: [
        createRule({
          name: 'phoneNumber',
          schema: ruPhoneNumberSchema,
        }),
      ],
      filter: (value: string) => size(value, 1, 11) && !isOnlyNumberString(value),
    },
  },
  validateOn: ['submit'],
})

export const sendConfirmation = phoneNumberForm.formValidated
export const sendCodeFx = createEffect()

sample({
  clock: sendConfirmation,
  target: sendCodeFx,
})

sample({
  source: phoneNumberForm.fields.phoneNumber.$value as Store<string>,
  target: sendPhoneConfirmationCodeFx,
  clock: sendConfirmation,
})

export interface ConfirmCodeForm {
  code: string
}

export const confirmCodeForm = createForm<ConfirmCodeForm>({
  fields: {
    code: {
      init: '',
      rules: [
        createRule({
          name: 'code',
          schema: string().required().length(4),
        }),
      ],
      filter: (value: string) => size(value, 4) && !isOnlyNumberString(value),
    },
  },
})

const sendCodeConfirmation = confirmCodeForm.formValidated

sample({
  source: combine<PhoneNumberCode>({
    phoneNumber: phoneNumberForm.fields.phoneNumber.$value,
    code: confirmCodeForm.fields.code.$value,
  }),
  target: loginByPhoneNumberFx,
  clock: sendCodeConfirmation,
})
