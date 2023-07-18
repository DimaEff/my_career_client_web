import { type NOT_ASSIGNED_USER_FILTER_VALUE } from '@/shared/api/tasks'

export enum TaskStatus {
  TODO = 'TODO',
  INPROGRESS = 'PROGRESS',
  REVIEW = 'REVIEW',
  COMPLETED = 'COMPLETED',
}

export interface GetTasksFilters {
  assignedTo: number | typeof NOT_ASSIGNED_USER_FILTER_VALUE
  createdBy: number
}
export type OptionalGetTasksFilters = Partial<GetTasksFilters>
