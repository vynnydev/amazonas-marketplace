import React from 'react'
import { useTheme } from 'next-themes'

// import ProductList from '@/presentation/components/product-list'
// import Gallery from '@/presentation/components/gallery'
// import Info from '@/presentation/components/info'

import getProduct from '@/infra/http/actions/get-product'
// import getProducts from '@/infra/http/actions/get-products'
import Container from '@/presentation/components/ui/container'
import ProductGallery from './components/product-gallery'
import ProductInfo from './components/product-info'
import ProductNav from './components/product-nav'

export const revalidate = 0

interface ProductPageProps {
  params: {
    productId: string
  }
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { resolvedTheme } = useTheme()
  const product = await getProduct(params.productId)
  // const suggestedProducts = await getProducts({
  //   categoryId: product?.category?.id,
  // })

  if (!product) {
    return null
  }

  return (
    <div
      style={{
        backgroundColor: resolvedTheme === 'dark' ? '#020817' : '#ffffff',
      }}
    >
      <Container>
        <ProductNav />
        <ProductGallery />
        <ProductInfo />
      </Container>
    </div>
  )
}

export default ProductPage
