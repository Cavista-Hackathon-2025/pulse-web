import RegistrationForm from "@/components/auth/registration-form"
import type { UserRole } from "@/types"

export default function RegisterPage({
  searchParams,
}: {
  searchParams: { role: string }
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Complete Your Profile</h1>
        <RegistrationForm role={searchParams.role as UserRole} />
      </div>
    </main>
  )
}

