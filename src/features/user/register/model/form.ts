import { type UseFormProps } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { type InferType, object, string } from 'yup'

import { ruPhoneNumberSchema } from '@/shared/lib'

const createUserFormSchema = object({
  firstName: string().required().min(3).max(16),
  surname: string().required().min(3).max(16),
  email: string().required().email(),
  phoneNumber: ruPhoneNumberSchema,
})

export interface CreateUserForm extends InferType<typeof createUserFormSchema> {}

export const createUserForm = (phoneNumber: string): UseFormProps<CreateUserForm> => ({
  mode: 'onSubmit',
  resolver: yupResolver(createUserFormSchema),
  defaultValues: { phoneNumber },
})
