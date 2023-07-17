import { type UserDto } from '@/shared/api/models'
import { type TaskStatus } from '@/shared/api/tasks/model/types.ts'

export interface TaskDto {
  id: number
  title: string
  description: string
  createdBy: UserDto
  assignedTo: UserDto | null
  createdAt: number
  dueDate: number | null
  status: TaskStatus
}

export interface CreateTaskDto {
  title: string
  description: string
  assignedToId: number | null
  dueDate: number | null
}

interface UpdateTaskDtoInfo {
  title: string
  description: string
  assignedTo: number | null
  dueDate: number | null
  status: number | null
}

export interface UpdateTaskDto extends Partial<UpdateTaskDtoInfo> {
  id: number
}
