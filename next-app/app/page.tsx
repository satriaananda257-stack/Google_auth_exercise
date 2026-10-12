import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { SignOutButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

export default async function Page() {
  const { userId } = await auth()

  if (!userId) {
    redirect("/sign-in")
  }

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Dashboard</h1>
          <p>Selamat datang! Kamu sudah login.</p>
          <SignOutButton redirectUrl="/sign-in">
            <Button variant="outline" className="mt-2">
              Log out
            </Button>
          </SignOutButton>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
