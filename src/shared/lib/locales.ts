export const LOCALES = {
  APP_NAME: 'AppName',
  CHECK_CODE: 'CheckCode',
  SEND_CONFIRMATION_CODE: 'SendConfirmationCode',
  ENTER_CODE_FROM_MESSAGE: 'EnterCodeFromMessage',
  HAVE_NOT_ACCOUNT_LINK: 'HaveNotAccountLink',
  ADD_COMPANY: 'Add a new company',
  ENTER_INFORMATION_ABOUT_COMPANY: 'EnterInformationAboutCompany',
  CREATE_COMPANY: 'Create',
  TITLE: 'Title',
  NOT_ITEMS: 'NotItems',
  REGISTER: 'Register',
  FORM: {
    ERROR: {
      _index: 'Form.FormError.', // how do I can implement the name of section
      REQUIRED: 'Form.FormError.Required',
      MIN_LENGTH: 'Form.FormError.MinLength',
      MAX_LENGTH: 'Form.FormError.MaxLength',
      RUSSIAN_PHONE_NUMBER: 'Form.FormError.RussianPhoneNumber',
      MATCH_ERROR: 'Form.MatchError',
    },
    FIELD_NAME: {
      FIRST_NAME: 'Form.FieldName.FirstName',
      SURNAME: 'Form.FieldName.Surname',
      EMAIL: 'Form.FieldName.Email',
      PHONE_NUMBER: 'Form.FieldName.PhoneNumber',
    },
  },
  PATH_NAME: {
    HOME: 'PathName.Home',
    COMPANIES: 'PathName.Companies',
    ROLES: 'PathName.Roles',
    TASKS: 'PathName.Tasks',
  },
} as const
