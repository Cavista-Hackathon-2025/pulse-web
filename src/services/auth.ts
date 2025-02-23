import type { UserRole } from "@/types"

export const loginWithEmail = async (email: string) => {
  return { success: true }
}

export const verifyOTP = async (email: string, otp: string) => {
  return {
    success: true,
    token: "dummy_token",
  }
}

export const register = async (data: {
  email: string
  role: UserRole
  firstName?: string
  lastName?: string
  [key: string]: any
}) => {
  return {
    success: true,
    user: {
      ...data,
      id: "dummy_id",
    },
  }
}

