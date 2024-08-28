import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Navbar() {
  return (
    <nav className="py-3 px-4 flex items-center gap-4 justify-between shadow-md sticky top-0 bg-background">
      <Link href={'/'} id="Logo" className="flex gap-3 items-center">
        <div className="rounded-full bg-accent size-8"></div>
        <p className="uppercase font-bold">Clerk NextJS</p>
      </Link>
      <div id="nav-links" className="flex gap-4 items-center">
        <Link href="/" className="hover:underline hover:text-foreground/80 transition-all">
          Home
        </Link>
        <Link href="/about" className="hover:underline hover:text-foreground/80 transition-all">
          About
        </Link>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <Link href="/dashboard" className="hover:underline hover:text-foreground/80 transition-all">
            Dashboard
          </Link>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}
