import Link from 'next/link'
import { ToggleTheme } from '@/components/theme-toggle'
import { MenuNavButton } from '@/components/menu-toggle'
import { GoogleSignInButton } from './auth-buttons'
import { auth } from '@/lib/auth/auth'
import { ProfileMenu } from './profile-menu'
import NavLinks from './nav-links'

export default async function Navbar () {
  const session: any = await auth()

  return (
    <header className='w-full flex items-center justify-center px-6 xl:px-4 bg-background/80 backdrop-blur-md group-[data]:backdrop-blur-md fixed top-0 left-0 border-b border-b-border/50'>
      <div className='w-full max-w-7xl h-20 flex items-center justify-between'>
        <Link href='/'>
          Logo
        </Link>

        <div className='flex items-center gap-3'>
          <NavLinks />
          <ToggleTheme />
          {!session ? <GoogleSignInButton redirectUrl={undefined} /> : <ProfileMenu session={session.user} />}
          <MenuNavButton />
        </div>
      </div>
    </header>
  )
}
