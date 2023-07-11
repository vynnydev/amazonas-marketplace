'use client'
import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/utils/lib/utils'
import { Category } from '@/domain/entities/category'

interface MainNavProps {
  data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname()

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }))

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            route.active
              ? 'text-black dark:text-white'
              : 'text-muted-foreground',
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav
