import { makeAutoObservable } from 'mobx'

import {
  type CreateTaskDto,
  type OptionalGetTasksFilters,
  type TaskDto,
  tasksService,
} from '@/shared/api/tasks'
import { type RootStore } from '@/stores/rootStore.ts'

export class TasksStore {
  public currentTask: TaskDto | null = null
  public tasks: TaskDto[] = []

  private readonly setTasks = (_tasks: TaskDto[]): void => {
    this.tasks = _tasks
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  constructor(private readonly rootStore: RootStore) {
    makeAutoObservable(this)
  }

  public readonly fetchAllTasks = async (
    filters: OptionalGetTasksFilters = {},
  ): Promise<TaskDto[] | null> => {
    const res = await tasksService.getAll(filters)
    if (res.errorMessage !== null) {
      this.setTasks([])
      return null
    }

    this.setTasks(res.payload ?? [])
    return res.payload
  }

  public readonly createTask = async (
    dto: CreateTaskDto,
    filters: OptionalGetTasksFilters = {},
  ): Promise<TaskDto | null> => {
    const res = await tasksService.createTask(dto)
    await this.fetchAllTasks(filters)
    return res.payload
  }
}
