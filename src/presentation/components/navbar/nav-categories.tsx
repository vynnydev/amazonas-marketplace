'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { GiClothes } from 'react-icons/gi'
import {
  PiTelevisionSimple,
  PiHandbagSimpleLight,
  PiOfficeChairLight,
} from 'react-icons/pi'
import { TbToolsKitchen2 } from 'react-icons/tb'
import { CgGames } from 'react-icons/cg'
import { BsPhone, BsFillJournalBookmarkFill, BsTools } from 'react-icons/bs'
import { BiMoviePlay } from 'react-icons/bi'

import {
  MdComputer,
  MdOutlineToys,
  MdOutlineHomeWork,
  MdOutlineSportsSoccer,
  MdPets,
} from 'react-icons/md'

import NavCategoryBox from '@/presentation/components/ui/nav-category-box'
import Container from '@/presentation/components/ui/container'

export const categories = [
  {
    label: 'Clothing & Footwear',
    icon: GiClothes,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Eletronics & TV',
    icon: PiTelevisionSimple,
    description: 'This property is has windmills!',
  },
  {
    label: 'Bags & Backpacks',
    icon: PiHandbagSimpleLight,
    description: 'This property is modern!',
  },
  {
    label: 'Computers & Informatic',
    icon: MdComputer,
    description: 'This property is in the countryside!',
  },
  {
    label: 'Games & Console',
    icon: CgGames,
    description: 'This is property has a beautiful pool!',
  },
  {
    label: 'Cell Phones',
    icon: BsPhone,
    description: 'This property is on an island!',
  },
  {
    label: 'Movies & Series',
    icon: BiMoviePlay,
    description: 'This property is near a lake!',
  },
  {
    label: 'Books',
    icon: BsFillJournalBookmarkFill,
    description: 'This property has skiing activies!',
  },
  {
    label: 'Toys & games',
    icon: MdOutlineToys,
    description: 'This property is an ancient castle!',
  },
  {
    label: 'Home & Garden',
    icon: MdOutlineHomeWork,
    description: 'This property is in a spooky cave!',
  },
  {
    label: 'Sport & Leisure',
    icon: MdOutlineSportsSoccer,
    description: 'This property offers camping activities!',
  },
  {
    label: 'Tools & Construction',
    icon: BsTools,
    description: 'This property is in arctic environment!',
  },
  {
    label: 'Stationery & Office',
    icon: PiOfficeChairLight,
    description: 'This property is in the desert!',
  },
  {
    label: 'Kitchen',
    icon: TbToolsKitchen2,
    description: 'This property is in a barn!',
  },
  {
    label: 'Pet Shop',
    icon: MdPets,
    description: 'This property is brand new and luxurious!',
  },
]

const NavCategories = () => {
  const params = useSearchParams()
  const category = params?.get('category')
  const pathname = usePathname()
  const isMainPage = pathname === '/'

  if (!isMainPage) {
    return null
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <NavCategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  )
}

export default NavCategories
