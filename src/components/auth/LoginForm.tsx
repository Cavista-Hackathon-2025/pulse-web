"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import { ClipLoader } from "react-spinners"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Store email in localStorage for the flow
    localStorage.setItem("userEmail", email)
    router.push(`/verify?email=${encodeURIComponent(email)}`)
  }

  return (
    <Card className="bg-secondary border-muted">
      <CardHeader>
        <CardTitle className="text-xl text-center text-white">Welcome to Pulse</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-muted text-white placeholder:text-gray-400"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
            {loading ? (
              <ClipLoader size={20} color="#ffffff" />
            ) : (
              <>
                <Mail className="mr-2 h-4 w-4" />
                Continue with Email
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

