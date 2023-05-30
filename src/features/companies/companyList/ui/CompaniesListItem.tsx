import { type FC, useState } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { type CompanyDto } from '@/shared/api/models'
import { useRootStore } from '@/stores/useRootStore.ts'

interface CompanyListItemProps {
  company: CompanyDto
}

const CompaniesListItem: FC<CompanyListItemProps> = ({ company }) => {
  const {
    authStore: { user, loginUserIntoCompany },
  } = useRootStore()

  const [hovered, setHovered] = useState(false)

  if (user === null) {
    return null
  }

  return (
    <Card
      onClick={async () => await loginUserIntoCompany(company.id, user?.id)}
      elevation={hovered ? 4 : 2}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        width: '100%',
      }}
    >
      <CardContent>
        <Typography>{company.title}</Typography>
      </CardContent>
    </Card>
  )
}

export default observer(CompaniesListItem)
