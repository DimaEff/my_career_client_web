import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import { PATHS } from '@/shared/paths.ts'

const Redirect = () => {
  const navigate = useNavigate()
  useEffect(() => navigate(PATHS.LOGIN.INDEX))

  return null
}

export default observer(Redirect)
