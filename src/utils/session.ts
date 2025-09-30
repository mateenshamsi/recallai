"use client"
import { useEffect, useState } from "react"

export function useSession() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    fetch("/api/auth/session")
      .then(res => res.json())
      .then(data => setSession(data))
      .catch(() => setSession(null))
  }, [])

  return session
}
