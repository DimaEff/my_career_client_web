import { Box } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { useRootStore } from '@/stores/useRootStore.ts'

const Home = () => {
  const {
    authStore: { company },
  } = useRootStore()

  return <Box>{company?.title}</Box>
}

export default observer(Home)
