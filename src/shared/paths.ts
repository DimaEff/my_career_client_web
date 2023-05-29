export const PATHS = {
  HOME: '/',
  LOGIN: {
    INDEX: '/login',
    CODE: (phoneNumber = ':phoneNumber') => `/login/${phoneNumber}/code`,
  },
  REGISTER: '/register',
  COMPANIES: '/companies',
} as const
