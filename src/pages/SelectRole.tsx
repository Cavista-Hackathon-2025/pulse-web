import RoleSelection from "@/components/auth/role-selection"

export default function SelectRolePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">Choose Your Role</h1>
        <RoleSelection />
      </div>
    </main>
  )
}

