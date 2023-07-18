import { makeAutoObservable } from 'mobx'

import { type GetTasksFilters, type OptionalGetTasksFilters } from '@/shared/api/tasks'

type FilterName = keyof GetTasksFilters

class TasksFiltersStore {
  public filters: OptionalGetTasksFilters = {}

  constructor() {
    makeAutoObservable(this)
  }

  public readonly setOptionalGetTasksFilter = <T extends FilterName>(
    filterName: T,
    value: GetTasksFilters[T] | null,
  ) => {
    const temp = { ...this.filters }
    if (value === null) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete temp[filterName]
    } else {
      temp[filterName] = value
    }

    this.filters = temp
  }
}

export const tasksFiltersStore = new TasksFiltersStore()
