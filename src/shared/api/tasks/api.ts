import axios from 'axios'

import { getBase } from '@/shared/api/lib.ts'
import { type ApiResponse } from '@/shared/api/models'
import {
  type CreateTaskDto,
  type TaskDto,
  type UpdateTaskDto,
} from '@/shared/api/tasks/model/dto.ts'

const BASE_URL = getBase('tasks')

export const createTask = async (dto: CreateTaskDto) =>
  (await axios.post<ApiResponse<TaskDto>>(BASE_URL, dto)).data

export const updateTask = async (dto: UpdateTaskDto) =>
  (await axios.put<ApiResponse<TaskDto>>(BASE_URL, dto)).data

export const getCompaniesTasks = async () =>
  (await axios.get<ApiResponse<TaskDto[]>>(BASE_URL)).data

export const getTaskById = async (taskId: number) =>
  (await axios.get<ApiResponse<TaskDto>>(BASE_URL + `/${taskId}`)).data

export const getTasksAssignedTo = async (userId: number) =>
  (await axios.get<ApiResponse<TaskDto[]>>(BASE_URL + `/assigned/${userId}`)).data

export const getNotAssignedTasks = async () =>
  (await axios.get<ApiResponse<TaskDto[]>>(BASE_URL + '/not-assigned')).data

export const getTasksCreatedBy = async (userId: number) =>
  (await axios.get<ApiResponse<TaskDto[]>>(BASE_URL + `/created-by/${userId}`)).data
