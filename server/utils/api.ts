// utils/api-helpers.ts
export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  meta: {
    timestamp: string
    pagination?: {
      page: number
      limit: number
      total: number
      totalPages: number
    }
  }
}

export const createResponse = <T>(
  success: boolean, 
  message: string, 
  data?: T, 
  pagination?: any
): ApiResponse<T> => ({
  success,
  message,
  data,
  meta: {
    timestamp: new Date().toISOString(),
    pagination
  }
})

export const throwError = (statusCode: number, message: string): never => {
  throw createError({
    statusCode,
    statusMessage: message,
    data: createResponse(false, message)
  })
}

export const validateMethod = (event: any, allowedMethods: string[]) => {
  const method = getMethod(event)
  if (!allowedMethods.includes(method)) {
    throwError(405, `Method ${method} not allowed`)
  }
}

export const parseQuery = (query: any) => {
  const page = Math.max(1, parseInt(query.page) || 1)
  const limit = Math.min(100, Math.max(1, parseInt(query.limit) || 10))
  const search = query.search?.trim() || ''
  const sortOrder = query.sortOrder === 'asc' ? 'asc' : 'desc'
  
  if (page < 1 || limit < 1) throwError(400, 'Invalid pagination parameters')
  
  return { page, limit, search, sortOrder }
}

export const connectDB = async () => {
  try {
    const { PrismaClient } = await import('~/generated/prisma')
    const prisma = new PrismaClient()
    await prisma.$connect()
    return prisma
  } catch {
    throwError(503, 'Database connection failed')
  }
}

export const handlePrismaError = (error: any) => {
  if (error.statusCode) throw error
  
  const errorMap: Record<string, [number, string]> = {
    'P2021': [500, 'Database schema error'],
    'P2024': [408, 'Database timeout'],
    'P2002': [409, 'Duplicate entry'],
    'P2025': [404, 'Record not found']
  }
  
  const [status, message] = errorMap[error.code] || [500, 'Internal server error']
  throwError(status, message)
}