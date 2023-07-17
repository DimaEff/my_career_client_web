export const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: {
    INDEX: '/register',
    FORM: (phoneNumber = ':phoneNumber') => `/register/form/${phoneNumber}`,
  },
  CONFIRMATION_CODE: (phoneNumber = ':phoneNumber') => `/confirmation_code/${phoneNumber}`,
  COMPANIES: '/companies',
  ROLES: '/roles',
  TASKS: '/tasks',
} as const
