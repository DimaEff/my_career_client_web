import { RootStore } from '@/stores/rootStore.ts'

let rootStore: RootStore

export const useRootStore = () => {
  if (!rootStore) {
    rootStore = new RootStore()
  }

  return rootStore
}
