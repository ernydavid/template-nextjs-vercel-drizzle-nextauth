'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'

export function MenuNavButton () {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        title='Menu toggle'
        type='button'
        onClick={handleClick}
        className='group items-center justify-center w-7 h-7 rounded-small tap-highlight-transparent md:hidden flex ml-4'
        data-open={isOpen}
      >
        <span className='sr-only'>{
          isOpen ? 'Navigation Menu Opened' : 'Navigation Menu Closed'
        }
        </span>
        <span className='w-full h-full pointer-events-none flex flex-col items-center justify-center text-inherit before:content-[""] before:block group-hover:opacity-80 before:h-px before:w-7 before:bg-foreground before:rounded-full before:-translate-y-1 group-data-[open="true"]:before:translate-y-px group-data-[open="true"]:before:rotate-45 before:transition-transform before:duration-150 after:content-[""] after:block after:h-px  after:w-7 after:bg-foreground after:rounded-full after:translate-y-1 group-data-[open="true"]:after:translate-y-0 group-data-[open="true"]:after:-rotate-45 after:transition-transform after:duration-150' />
      </button>
      <div
        onClick={handleClick}
        className={cn(
          'top-20 left-0 w-full bg-background/95 fixed z-20 transition-all ease-in-out duration-300 origin-top md:hidden',
          isOpen ? 'h-screen overflow-auto' : 'h-0 overflow-hidden'
        )}
      >
        <div className='w-full h-full p-6 flex flex-col gap-3'>
          <Link
            href='/dashboard'
          >
            Dashboard
          </Link>
        </div>
      </div>
    </>
  )
}
