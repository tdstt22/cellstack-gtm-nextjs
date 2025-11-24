export interface FormSubmission {
  firstName: string
  lastName: string
  email: string
  company: string
  companySize: string
  role: string
  message?: string
}

export interface ApiSuccessResponse {
  success: true
  message: string
}

export interface ApiErrorResponse {
  success: false
  error: string
  details?: string
}

export type ApiResponse = ApiSuccessResponse | ApiErrorResponse
