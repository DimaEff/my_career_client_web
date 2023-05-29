import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import {
  useUserAuthentificated,
  useUserAuthentificatedIntoCompany,
} from '@/shared/lib/hooks/useUserAuthentificated.ts'
import { PATHS } from '@/shared/paths.ts'
import CenteredContainer from '@/widgets/CenteredContainer'
import LoginPhoneNumberConfirmation from '@/widgets/LoginSendPhoneConfirmation'

const Login = () => {
  const navigate = useNavigate()

  const authentificated = useUserAuthentificated()
  const authIntoCompany = useUserAuthentificatedIntoCompany()

  if (authentificated) {
    navigate(PATHS.COMPANIES)
  }

  if (authIntoCompany) {
    navigate(PATHS.HOME)
  }

  return (
    <CenteredContainer withLogo>
      <LoginPhoneNumberConfirmation />
    </CenteredContainer>
  )
}

export default observer(Login)
