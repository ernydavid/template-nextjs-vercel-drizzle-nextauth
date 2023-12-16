'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

type NavLink = {
  id: string
  label: string
  href: string
}
type ArrLinks = Array<NavLink>

const navLinks: ArrLinks = [
  {
    id: 'home-link',
    label: 'Home',
    href: '/'
  },
  {
    id: 'services-link',
    label: 'Services',
    href: '/services'
  },
  {
    id: 'contact-link',
    label: 'Contact',
    href: '/contact'
  }
]

export default function NavLinks () {
  const pathname = usePathname()

  return (
    <div className='items-center gap-2 mr-5 md:flex hidden'>
      {navLinks.map((item: NavLink) => (
        <Link
          className={cn(
            '',
            pathname === item.href ? 'text-primary' : ''
          )}
          key={item.id}
          href={item.href}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}
