import { setLocale } from 'yup'

import { REGULAR_EXPRESSIONS } from '@/shared/lib'
import { LOCALES } from '@/shared/lib/locales.ts'

const { FORM_ERROR } = LOCALES

export default () =>
  setLocale({
    mixed: {
      required: () => ({ key: FORM_ERROR.REQUIRED }),
    },
    string: {
      matches: ({ regex }) => {
        let key: string = FORM_ERROR.MATCH_ERROR
        switch (regex) {
          case REGULAR_EXPRESSIONS.RU_PHONE_NUMBER:
            key = FORM_ERROR.RUSSIAN_PHONE_NUMBER
        }

        return {
          key,
          values: { regex: regex.toString() },
        }
      },
    },
    number: {
      min: ({ min }) => ({
        key: FORM_ERROR.MIN_LENGTH,
        values: { length: min },
      }),
      max: ({ max }) => ({
        key: FORM_ERROR.MAX_LENGTH,
        values: { length: max },
      }),
    },
  })
