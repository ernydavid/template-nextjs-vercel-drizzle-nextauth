import { signIn, signOut } from '@/lib/auth/auth'
import { Button } from './ui/button'
import { GoogleIcon } from './icons'
import { LogOut } from 'lucide-react'

export function GoogleSignInButton ({ redirectUrl }: {
  redirectUrl: string | undefined
}) {
  return (
    <form action={async (formdata: FormData) => {
      'use server'
      await signIn('google', { redirectTo: redirectUrl })
    }}
    >
      <Button
        type='submit'
      >
        <div className='flex items-center gap-1'>
          <GoogleIcon className='fill-primary-foreground w-5' />
          <span>Sign in</span>
        </div>
      </Button>
    </form>
  )
}

export function SignOutButton () {
  return (
    <form
      className='w-full'
      action={async (formdata: FormData) => {
        'use server'
        await signOut()
      }}
    >
      <Button
        className='w-full p-0 flex justify-between bg-transparent hover:bg-transparent text-foreground'
      >
        <div className='flex items-center'>
          <LogOut className='mr-2 h-4 w-4' />
          <span>Sign out</span>
        </div>
        <span>⇧⌘Q</span>
      </Button>
    </form>
  )
}
