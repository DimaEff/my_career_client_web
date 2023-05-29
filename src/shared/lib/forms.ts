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

export const REGULAR_EXPRESSIONS = {
  // eslint-disable-next-line prettier/prettier,no-useless-escape
  RU_PHONE_NUMBER: /(^7|8)((d{10})|(s(d{3})sd{3}sd{2}sd{2}))/,
} as const

// export const ruPhoneNumberSchema = string().required().matches(REGULAR_EXPRESSIONS.RU_PHONE_NUMBER)
export const ruPhoneNumberSchema = string().required()
