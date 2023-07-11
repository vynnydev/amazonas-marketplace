'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()

  return (
    <div className="flex flex-row items-center">
      <div className="mr-2">
        <Image
          onClick={() => router.push('/')}
          className="hidden md:block cursor-pointer"
          src="/images/v8s.png"
          height="50"
          width="50"
          alt="Logo"
        />
      </div>
      <Link href="/" className="mr-6 flex lg:ml-0 gap-x-2">
        <p className="font-bold text-xl">Amazonas</p>
      </Link>
    </div>
  )
}

export default Logo
