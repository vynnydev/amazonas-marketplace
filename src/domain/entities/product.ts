import { Category } from './category'
import { Color } from './color'
import { Image } from './image'
import { Size } from './size'

export interface Product {
  id: string
  category: Category
  name: string
  price: string
  isFeatured: boolean
  size: Size
  color: Color
  images: Image[]
}
