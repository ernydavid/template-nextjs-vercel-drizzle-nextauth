import {
  Cloud,
  CreditCard,
  HomeIcon,
  LayoutDashboardIcon,
  LifeBuoy,
  MapPinnedIcon,
  PlaneLandingIcon,
  PlaneTakeoffIcon,
  Plus,
  PlusCircle,
  Settings,
  User as UserIcon
} from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { User } from '@/db/schema'
import { SignOutButton } from './auth-buttons'
import Link from 'next/link'

export function ProfileMenu ({ session }: {
  session: User
}) {
  const initialsName = session?.name?.split(' ').map((name) => name.charAt(0)).join(',').replace(',', '')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={session.image as string} alt={session?.name as string} />
          <AvatarFallback>{initialsName}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>{session?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon className='mr-2 h-4 w-4' />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className='mr-2 h-4 w-4' />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className='mr-2 h-4 w-4' />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href='/dashboard'>
            <DropdownMenuItem>
              <LayoutDashboardIcon className='mr-2 h-4 w-4' />
              <span>Dashboard</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Plus className='mr-2 h-4 w-4' />
              <span>New Service</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <PlaneTakeoffIcon className='mr-2 h-4 w-4' />
                  <span>Send Package</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <PlaneLandingIcon className='mr-2 h-4 w-4' />
                  <span>Receive Package</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle className='mr-2 h-4 w-4' />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <MapPinnedIcon className='mr-2 h-4 w-4' />
            <span>Tracking</span>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <HomeIcon className='mr-2 h-4 w-4' />
          <span>Main Page</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className='mr-2 h-4 w-4' />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className='mr-2 h-4 w-4' />
          <span>Feedback</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='w-full flex items-center justify-center hover:bg-destructive'>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
