import { Card, CardContent } from '@mui/material'

import { RegisterForm } from '@/features/user'
import { PrettyTitle } from '@/shared/ui/Typography'

const RegisterUserCard = () => {
  return (
    <Card sx={{ maxWidth: '400px' }}>
      <CardContent>
        <PrettyTitle>Введите информацию о себе</PrettyTitle>
        <RegisterForm />
      </CardContent>
    </Card>
  )
}

export default RegisterUserCard
