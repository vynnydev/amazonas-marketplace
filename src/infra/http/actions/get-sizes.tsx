import { Size } from '@/domain/entities/size'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL)

  return res.json()
}

export default getSizes
