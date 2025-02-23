import OTPVerification from "@/components/auth/OtpVerification"

export default function VerifyPage({
  searchParams,
}: {
  searchParams: { email: string }
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8">Verify Email</h1>
        <OTPVerification email={searchParams.email} />
      </div>
    </main>
  )
}

