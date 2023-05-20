// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { type Rule } from 'effector-forms'
import { type AnyObject, type Schema, string, type StringSchema } from 'yup'

interface CreateRuleItem<T> {
  schema: Schema<T>
  name: string
}

export function createRule<T>({ schema, name }: CreateRuleItem<T>): Rule<T> {
  return {
    name,
    validator: (v: T) => {
      try {
        schema.validateSync(v)
        return {
          isValid: true,
          value: v,
        }
      } catch (err: any) {
        return {
          isValid: false,
          value: v,
          errorText: err.message,
        }
      }
    },
  }
}

export const RU_PHONE_NUMBER_REGEX = /(^7|8|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/

export const ruPhoneNumberSchema: StringSchema<string, AnyObject, null, 'd'> = string()
  .required()
  .matches(RU_PHONE_NUMBER_REGEX, {
    message: 'Номер телефона должен быть вида: +7-000-000-00-00',
  })
  .default(() => null)
