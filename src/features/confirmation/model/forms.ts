import { type UseFormProps } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { type InferType, object, string } from 'yup'

import { ruPhoneNumberSchema } from '@/shared/lib'

const phoneNumberFormSchema = object({
  phoneNumber: ruPhoneNumberSchema,
})

export interface PhoneNumberForm extends InferType<typeof phoneNumberFormSchema> {}

export const phoneNumberForm: UseFormProps<PhoneNumberForm> = {
  resolver: yupResolver(phoneNumberFormSchema),
  mode: 'onSubmit',
  defaultValues: {
    phoneNumber: '7',
  },
}

const confirmationCodeFormSchema = object({
  code: string().required().length(4),
})

export interface ConfirmationCodeForm extends InferType<typeof confirmationCodeFormSchema> {}

export const confirmationCodeForm: UseFormProps<ConfirmationCodeForm> = {
  resolver: yupResolver(confirmationCodeFormSchema),
  mode: 'onSubmit',
}
