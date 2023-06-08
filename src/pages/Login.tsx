import { observer } from 'mobx-react-lite'

import CenteredContainer from '@/widgets/CenteredContainer'

import SendPhoneNumberConfirmationCard from '../widgets/SendPhoneConfirmationCard'

const Login = () => {
  return (
    <CenteredContainer withLogo>
      <SendPhoneNumberConfirmationCard />
    </CenteredContainer>
  )
}

export default observer(Login)
