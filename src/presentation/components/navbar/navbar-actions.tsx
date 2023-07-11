'use client'
import React, { useEffect, useState } from 'react'

import { SafeUser } from '@/domain/entities/user'

import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'

import CartButton from '@/presentation/components/ui/cart-button'
import useCart from '@/presentation/hooks/use-cart'

import { ThemeToggle } from '@/presentation/components/theme-toggle'
import UserMenu from './user-menu'

interface INavbarProps {
  currentUser?: SafeUser | null
}

const NavbarActions: React.FC<INavbarProps> = ({ currentUser }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const router = useRouter()
  const cart = useCart()

  if (!isMounted) {
    return null
  }

  return (
    <div className="flex flex-row items-center gap-3 mr-3">
      <ThemeToggle />
      <CartButton
        onClick={() => router.push('/cart')}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </CartButton>
      <UserMenu currentUser={currentUser} />
    </div>
  )
}

export default NavbarActions
