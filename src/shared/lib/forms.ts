// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { type Rule } from 'effector-forms'
import { type Schema, string } from 'yup'

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

export const isOnlyNumberString = (value: string): boolean => isNaN(+value)

export function size(value: string, length: number): boolean
export function size(value: string, min: number, max: number): boolean
export function size(value: string, minOrLength: number, max?: number): boolean {
  const length = value.length
  if (max === undefined) {
    return length <= minOrLength
  }

  return length >= minOrLength && length <= max
}

const RU_PHONE_NUMBER_REGEX = /(^7|8)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/

export const ruPhoneNumberSchema = string().required().matches(RU_PHONE_NUMBER_REGEX, {
  message: 'Номер телефона должен быть вида: 7-000-000-00-00',
})
