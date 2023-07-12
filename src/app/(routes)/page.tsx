import getBillboard from '@/infra/http/actions/get-billboard'
import getProducts from '@/infra/http/actions/get-products'
import CategoryPreviews from '@/presentation/components/category-previews'
// import ProductList from '@/presentation/components/product-list'
import Billboard from '@/presentation/components/ui/billboard'
import Container from '@/presentation/components/ui/container'

export const revalidate = 0

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true })
  console.log(products)
  const billboard = await getBillboard('27c833b5-9251-4ff2-9645-5af8f500ffca')

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-7 px-4 sm:px-6 lg:px-8">
          <CategoryPreviews />
          {/* <ProductList title="Featured Products" items={products} /> */}
        </div>
      </div>
    </Container>
  )
}

export default HomePage
