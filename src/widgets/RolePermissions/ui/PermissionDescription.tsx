import { type FC } from 'react'
import InfoIcon from '@mui/icons-material/Info'
import { Tooltip } from '@mui/material'

interface PermissionDescriptionProps {
  description: string
}

const PermissionDescription: FC<PermissionDescriptionProps> = ({ description }) => {
  return (
    <Tooltip title={description}>
      <InfoIcon />
    </Tooltip>
  )
}

export default PermissionDescription
