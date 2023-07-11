'use client'

import usePreviewModal from '@/presentation/hooks/use-preview-modal'
import Gallery from '@/presentation/components/gallery'
import Info from '@/presentation/components/info'
import ProductModal from '@/presentation/components/modals/product-modal'

const PreviewModal = () => {
  const previewModal = usePreviewModal()
  const product = usePreviewModal((state) => state.data)

  if (!product) {
    return null
  }

  return (
    <ProductModal isOpen={previewModal.isOpen} onClose={previewModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </ProductModal>
  )
}

export default PreviewModal
