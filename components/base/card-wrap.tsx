import React from 'react'
import { cn } from '@/lib/utils'

function CardWrap({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn('p-20px shadow-[0,1px,3px,rgba(0,0,0,.1)] bg-white text-13px', className)}>
      {children}
    </section>
  )
}

export default CardWrap