"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  CheckCircle,
  AlertCircle,
  LogIn,
} from "lucide-react"

import { createAuthClient } from "better-auth/client"

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
})

type FormValues = z.infer<typeof formSchema>

// Create auth client instance
const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000"
})

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)
  const [errorMessage, setErrorMessage] = useState<string>("")
  const router = useRouter()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: FormValues) => {
    try {
      setLoading(true)
      setSubmitStatus(null)
      setErrorMessage("")

      const { data, error } = await authClient.signIn.email({
        email: values.email,
        password: values.password,
        rememberMe: true
      })

      if (error) {
        setSubmitStatus("error")
        setErrorMessage(error.message || "Login failed")
        return
      }

      if (data) {
        setSubmitStatus("success")
        setTimeout(() => router.push("/"), 1000)
      }
    } catch (err: any) {
      console.error("Login failed:", err)
      setSubmitStatus("error")
      setErrorMessage(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#8B4513] to-[#A0522D] rounded-full mb-4 shadow-lg">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-[#5C4033] mb-2">Welcome Back</h1>
          <p className="text-[#6B4423]/90">Log in to continue to your account</p>
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-[#5C4033] font-medium">
                      <Mail className="w-4 h-4" /> Email
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        {...field} 
                        placeholder="Enter your email"
                        className="h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-[#5C4033] font-medium">
                      <Lock className="w-4 h-4" /> Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          {...field}
                          placeholder="Enter your password"
                          className="h-11 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-[#8B4513] hover:text-[#A0522D] font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={loading} 
                className="w-full h-12 bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white hover:from-[#A0522D] hover:to-[#8B4513]"
              >
                {loading ? "Logging in..." : "Log In"}
              </Button>

              {/* Status messages */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  <CheckCircle className="w-5 h-5" /> Logged in successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  <AlertCircle className="w-5 h-5" /> {errorMessage || "Invalid email or password."}
                </div>
              )}
            </form>
          </Form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-[#6B4423]/90">
              Don't have an account?{" "}
              <Link 
                href="/signup" 
                className="text-[#8B4513] hover:text-[#A0522D] font-semibold"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}