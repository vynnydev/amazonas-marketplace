import React from 'react'

import getCategory from '@/infra/http/actions/get-category'
import getColors from '@/infra/http/actions/get-colors'
import getProducts from '@/infra/http/actions/get-products'
import getSizes from '@/infra/http/actions/get-sizes'

import Container from '@/presentation/components/ui/container'
import Billboard from '@/presentation/components/ui/billboard'

import MobileFilters from './components/mobile-filters'
import Filter from './components/filter'
import NoResults from '@/presentation/components/ui/no-results'
import ProductCard from '@/presentation/components/ui/product-card'

interface ICategoryPageProps {
  params: {
    categoryId: string
  }
  searchParams: {
    colorId: string
    sizeId: string
  }
}

export const revalidate = 0

const CategoryPage: React.FC<ICategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  })
  const sizes = await getSizes()
  const colors = await getColors()
  const category = await getCategory(params.categoryId)

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoryPage
