import { observer } from 'mobx-react-lite'

import CenteredContainer from '@/widgets/CenteredContainer'
import LoginPhoneNumberConfirmation from '@/widgets/LoginSendPhoneConfirmation'

const Login = () => {
  return (
    <CenteredContainer withLogo>
      <LoginPhoneNumberConfirmation />
    </CenteredContainer>
  )
}

export default observer(Login)
