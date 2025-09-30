"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useRouter } from "next/navigation"

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
  User,
  Mail,
  Lock,
  CheckCircle,
  AlertCircle,
  Github,
  Chrome,
} from "lucide-react"

import { auth } from "@/utils/auth" // BetterAuth instance you created
import { createAuthClient } from "better-auth/client";
// ✅ Validation schema
const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(20, { message: "Username must be less than 20 characters." })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores.",
    }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
    }),
})

type FormValues = z.infer<typeof formSchema>

export default function SignUpPage() {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  )
  const router = useRouter()
  const authClient = createAuthClient();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  // 👉 Handle email/password signup via BetterAuth
  const onSubmit = async (values: FormValues) => {
    try {
      setLoading(true)
      setSubmitStatus(null)

      const user = await auth.emailAndPassword.register({
        email: values.email,
        password: values.password,
        username: values.username,
      })

      if (user) {
        setSubmitStatus("success")
        router.push("/dashboard") // Redirect after successful signup
      } else {
        setSubmitStatus("error")
      }
    } catch (err: any) {
      console.error("Signup failed:", err)
      setSubmitStatus("error")
    } finally {
      setLoading(false)
    }
  }

 const handleSocialAuth = async (provider: "google" | "github") => {
    try {
      setLoading(true)
      setSubmitStatus(null)
     const data = await authClient.signIn.social({
    provider: "google",
  });} catch (err: any) {
      console.error("Social auth failed:", err)
      setSubmitStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-4 shadow-lg">
            <User className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600">Join us today and get started</p>
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Username */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                      <User className="w-4 h-4" /> Username
                    </FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter your username" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                      <Mail className="w-4 h-4" /> Email
                    </FormLabel>
                    <FormControl>
                      <Input type="email" {...field} placeholder="Enter your email" />
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
                    <FormLabel className="flex items-center gap-2 text-gray-700 font-medium">
                      <Lock className="w-4 h-4" /> Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          {...field}
                          placeholder="Create a strong password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <Button type="submit" disabled={loading} className="w-full h-12 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                {loading ? "Creating Account..." : "Create Account"}
              </Button>

              {/* Status messages */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  <CheckCircle className="w-5 h-5" /> Account created successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  <AlertCircle className="w-5 h-5" /> Something went wrong. Please try again.
                </div>
              )}

              {/* Divider */}
              <div className="relative flex items-center my-6">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="px-4 text-sm text-gray-500 bg-white">or continue with</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              {/* Social buttons */}
              <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleSocialAuth("google")}
                  disabled={loading}
                  className="w-full h-12 border-gray-200"
                >
                  <Chrome className="w-5 h-5 mr-2 text-blue-500" /> Continue with Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleSocialAuth("github")}
                  disabled={loading}
                  className="w-full h-12 border-gray-200"
                >
                  <Github className="w-5 h-5 mr-2" /> Continue with GitHub
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
