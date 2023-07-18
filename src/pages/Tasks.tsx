import { useEffect } from 'react'
import { Stack } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { useRootStore } from '@/stores/useRootStore.ts'
import { TasksFilters } from '@/widgets/TasksFilters'

const Tasks = () => {
  const {
    tasksStore: { tasks },
  } = useRootStore()

  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  return (
    <Stack width={'100%'} spacing={1}>
      <TasksFilters />
      tasks
    </Stack>
  )
}

export default observer(Tasks)
