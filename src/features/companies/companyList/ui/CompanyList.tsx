import { type FC } from 'react'

import CompaniesListItem from '@/features/companies/companyList/ui/CompaniesListItem.tsx'
import { type CompanyDto } from '@/shared/api/models'

interface CompanyListProps {
  companies: CompanyDto[]
}

const CompaniesList: FC<CompanyListProps> = ({ companies }) => {
  return (
    <>
      {companies.map((c) => (
        <CompaniesListItem key={c.id} company={c} />
      ))}
    </>
  )
}

export default CompaniesList
