import { type FC, useState } from 'react'
import { Card, CardContent, Typography } from '@mui/material'

import { type CompanyDto } from '@/shared/api/models'

interface CompanyListItemProps {
  company: CompanyDto
}

const CompaniesListItem: FC<CompanyListItemProps> = ({ company }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <Card
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

export default CompaniesListItem
