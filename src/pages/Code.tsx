import { observer } from 'mobx-react-lite'

import CenteredContainer from '@/widgets/CenteredContainer'
import ConfirmCodeCard from '@/widgets/ConfirmCodeCard'

const Code = () => {
  return (
    <CenteredContainer withLogo>
      <ConfirmCodeCard />
    </CenteredContainer>
  )
}

export default observer(Code)
