import { type FC, useCallback, useState } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { useRootStore } from '@/stores/useRootStore.ts'
import { type UserOption } from '@/widgets/TasksFilters/model/types.ts'

interface UsersFilterProps {
  label: string
  value: UserOption | null
  additionalOptions?: UserOption[]
  onChange: (value: UserOption | null) => void
}

const UsersFilter: FC<UsersFilterProps> = ({ value, label, additionalOptions, onChange }) => {
  const {
    companiesStore: { fetchCompanyUsers },
  } = useRootStore()

  const [isOpen, setIsOpen] = useState(false)
  const [usersOptions, setUserOptions] = useState<UserOption[]>([])

  const handleFetchUserOptions = useCallback(async () => {
    const users = await fetchCompanyUsers()
    const options = users?.map<UserOption>((u) => ({
      id: u.id,
      label: `${u.firstname} ${u.surname}`,
    }))
    setUserOptions(options ?? [])
  }, [fetchCompanyUsers])

  const handleOpen = useCallback(async () => {
    setIsOpen(true)
    await handleFetchUserOptions()
  }, [handleFetchUserOptions])

  return (
    <Autocomplete<UserOption>
      sx={{ width: 180 }}
      value={value}
      open={isOpen}
      onOpen={handleOpen}
      onClose={() => setIsOpen(false)}
      options={[...(additionalOptions ?? []), ...usersOptions]}
      onChange={(_, value) => onChange(value)}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  )
}

export default observer(UsersFilter)
