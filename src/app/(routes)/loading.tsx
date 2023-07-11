import Container from '@/presentation/components/ui/container'
import SkeletonLoader from '@/presentation/components/ui/skeleton-loader'

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-8">
        <SkeletonLoader className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <SkeletonLoader className="aspect-square rounded-xl" />
          <SkeletonLoader className="aspect-square rounded-xl" />
          <SkeletonLoader className="aspect-square rounded-xl" />
          <SkeletonLoader className="aspect-square rounded-xl" />
          <SkeletonLoader className="aspect-square rounded-xl" />
          <SkeletonLoader className="aspect-square rounded-xl" />
        </div>
      </div>
    </Container>
  )
}

export default Loading
