import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { SignIn } from "@clerk/nextjs"

export default async function Page() {
  const { userId } = await auth()

  if (userId) {
    redirect("/")
  }

  return (
    <div className="flex min-h-svh items-center justify-center">
      <SignIn />
    </div>
  )
}
