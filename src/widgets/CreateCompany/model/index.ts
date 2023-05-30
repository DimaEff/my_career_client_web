// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { createForm } from 'effector-forms'
import { string } from 'yup'

import { createRule } from '@/shared/lib'

interface CreateCompanyForm {
  title: string
}

export const createCompanyForm = createForm<CreateCompanyForm>({
  fields: {
    title: {
      init: '',
      rules: [
        createRule<string>({
          name: 'length',
          schema: string().required().min(3).max(32),
        }),
      ],
    },
  },
})
