import { type UseFormProps } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { type InferType, object, string } from 'yup'

const createCompanyFormSchema = object({
  title: string().required().min(3).max(32),
})

export interface CreateCompanyForm extends InferType<typeof createCompanyFormSchema> {}

export const createCompanyForm: UseFormProps<CreateCompanyForm> = {
  resolver: yupResolver(createCompanyFormSchema),
  mode: 'onSubmit',
}
