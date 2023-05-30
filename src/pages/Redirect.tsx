import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { PATHS } from '@/shared/paths.ts'

const Redirect = ({ to }: { to?: string }) => {
  const navigate = useNavigate()
  useEffect(() => navigate(to ?? PATHS.LOGIN.INDEX))

  return null
}

export default observer(Redirect)
