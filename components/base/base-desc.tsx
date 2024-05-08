import React from 'react'
import { cn } from '@/lib/utils'

function BaseDesc({ className, children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mb-10px lh-20px line-clamp-2 text-gray-5', className)}>
      {children}
    </div>
  )
}

export default BaseDesc