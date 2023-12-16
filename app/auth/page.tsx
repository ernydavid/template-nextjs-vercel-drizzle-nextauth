import { GoogleSignInButton } from '@/components/auth-buttons'
import { auth } from '@/lib/auth/auth'
import { redirect } from 'next/navigation'

export default async function AuthPage ({ searchParams }: {
  searchParams: {
    callbackUrl: string
  }
}) {
  const session = await auth()

  if (session) {
    return redirect('/')
  }

  return (
    <main className='w-full flex flex-col justify-center items-center gap-3 mt-10'>
      <h1>Please, login first</h1>
      <GoogleSignInButton redirectUrl={searchParams.callbackUrl.toString()} />
    </main>
  )
}
