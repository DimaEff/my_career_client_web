export enum TaskStatus {
  TODO = 'TODO',
  INPROGRESS = 'PROGRESS',
  REVIEW = 'REVIEW',
  COMPLETED = 'COMPLETED',
}

export interface GetTasksFilters {
  assignedTo: number | 'null'
  createdBy: number
}
export type OptionalGetTasksFilters = Partial<GetTasksFilters>
