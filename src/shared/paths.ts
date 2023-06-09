export const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  CONFIRMATION_CODE: (phoneNumber = ':phoneNumber') => `/confirmation_code/${phoneNumber}`,
  COMPANIES: '/companies',
  ROLES: '/roles',
} as const
