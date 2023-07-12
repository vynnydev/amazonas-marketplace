'use client'
import { useTheme } from 'next-themes'

// import MainNav from '@/presentation/components/navbar/main-nav'
import Container from '@/presentation/components/ui/container'
import NavbarActions from '@/presentation/components/navbar/navbar-actions'
// import getCategories from '@/infra/http/actions/get-categories'

import Search from './search'
import NavCategories from './nav-categories'
import Logo from './logo'

const Navbar = () => {
  const { resolvedTheme } = useTheme()

  return (
    <div
      className="fixed w-full z-10 bg-opacity-100"
      style={{
        backgroundColor: resolvedTheme === 'dark' ? '#020817' : '#ffffff',
      }}
    >
      <div
        className="
            py-4 
            border-b-[1px]
          "
      >
        <Container>
          <div
            className="
              flex 
              flex-row 
              items-center 
              justify-between
              gap-3
              md:gap-0
            "
          >
            <Logo />
            <Search />
            <NavbarActions />
          </div>
        </Container>
      </div>
      <NavCategories />
    </div>
  )
}

export default Navbar
