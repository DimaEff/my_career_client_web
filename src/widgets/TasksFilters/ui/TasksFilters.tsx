import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Stack, type SxProps } from '@mui/material'
import { type Theme } from '@mui/material/styles'
import { observer } from 'mobx-react-lite'

import { type UserOption, UsersFilter } from '@/features/tasks/filters'
import { NOT_ASSIGNED_USER_FILTER_VALUE } from '@/shared/api/tasks'
import { LOCALES } from '@/shared/lib/locales.ts'
import { useRootStore } from '@/stores/useRootStore.ts'
import { NOT_ASSIGNED_USER_ID } from '@/widgets/TasksFilters/model/constants.ts'
import { tasksFiltersStore } from '@/widgets/TasksFilters/model/store.ts'

const TasksFilters = observer(() => {
  const { filters, setOptionalGetTasksFilter } = tasksFiltersStore

  const { t } = useTranslation()

  const {
    tasksStore: { fetchAllTasks },
  } = useRootStore()

  const [assignedTo, setAssignedTo] = useState<UserOption | null>(null)
  const [createdBy, setCreatedBy] = useState<UserOption | null>(null)

  useEffect(() => {
    console.log(filters)
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchAllTasks(filters)
  }, [fetchAllTasks, filters])

  useEffect(() => {
    setOptionalGetTasksFilter(
      'assignedTo',
      (assignedTo?.id === NOT_ASSIGNED_USER_ID ? NOT_ASSIGNED_USER_FILTER_VALUE : assignedTo?.id) ??
        null,
    )
  }, [assignedTo, setOptionalGetTasksFilter])

  useEffect(() => {
    setOptionalGetTasksFilter('createdBy', createdBy?.id ?? null)
  }, [createdBy, setOptionalGetTasksFilter])

  return (
    <Stack direction={'row'} sx={filtersContainerStyles} spacing={1}>
      <UsersFilter
        label={t(LOCALES.ASSIGNED_TO)}
        value={assignedTo}
        onChange={setAssignedTo}
        additionalOptions={[
          {
            id: NOT_ASSIGNED_USER_ID,
            label: t(LOCALES.NOT_ASSIGNED_TASKS),
          },
        ]}
      />
      <UsersFilter label={t(LOCALES.CREATED_BY)} value={createdBy} onChange={setCreatedBy} />
    </Stack>
  )
})

const filtersContainerStyles: SxProps<Theme> = {
  width: '100%',
}

export default TasksFilters
