import { SignInButton, UserButton } from "@clerk/nextjs"
import { ThemeToggle } from "@/components/ui/themetoggle"

export default function HomePage() {
  return (
    <div className="p-4 flex items-center gap-4">
      <SignInButton />
      <UserButton />
      <ThemeToggle />
    </div>
  )
}
