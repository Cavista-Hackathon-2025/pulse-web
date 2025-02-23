import LoginForm from "@/components/auth/LoginForm"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8">Pulse</h1>
        <LoginForm />
      </div>
    </main>
  )
}

