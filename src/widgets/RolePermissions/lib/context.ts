import { createContext } from 'react'

interface SelectedPermissionsContextData {
  selected: number[]
  onSelect: (id: number) => void
}

export const SelectedPermissionsContext = createContext<SelectedPermissionsContextData>({
  selected: [],
  onSelect: () => undefined,
})
