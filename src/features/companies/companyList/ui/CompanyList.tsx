import { type FC } from 'react'

import CompaniesListItem from '@/features/companies/companyList/ui/CompaniesListItem.tsx'
import { type CompanyDto } from '@/shared/api/models'
import { Stack } from '@mui/material'

interface CompanyListProps {
  companies: CompanyDto[]
}

const CompaniesList: FC<CompanyListProps> = ({ companies }) => {
  return (
    <Stack spacing={1}>
      {companies.map((c) => (
        <CompaniesListItem key={c.id} company={c} />
      ))}
    </Stack>
  )
}

export default CompaniesList
