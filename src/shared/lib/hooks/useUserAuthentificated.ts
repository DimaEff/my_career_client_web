import { useRootStore } from '@/stores/useRootStore.ts'

export const useUserAuthentificated = (): boolean => {
  const {
    authStore: { user },
  } = useRootStore()

  return user !== null
}

export const useUserAuthentificatedIntoCompany = () => {
  const {
    companiesStore: { currentCompany },
  } = useRootStore()
  const authentificated = useUserAuthentificated()

  return authentificated && currentCompany !== null
}
