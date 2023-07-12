import React from 'react'
import { Billboard as BillboardEntity } from '@/domain/entities/billboard'

interface IBillboardProps {
  data: BillboardEntity
}

const Billboard: React.FC<IBillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="h-80 rounded-xl bg-white bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-80 w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billboard
