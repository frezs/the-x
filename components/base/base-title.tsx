import React from 'react'
import { cn } from '@/lib/utils'

export enum ITitleType {
  primary,
  secondary,
}

export interface IBaseTitleProps {
  hover?: string
  type?: ITitleType
  url: string
}

function BaseTitle({ className, children, ...props }: IBaseTitleProps & React.HTMLAttributes<HTMLLinkElement>) {
  const { hover = 'color-blue', url, type = ITitleType.secondary } = props
  let textCls: string
  switch (type) {
    case ITitleType.primary:
      textCls = 'text-22px lh-30px font-bold max-h-60px'
      break
    default:
      textCls = 'text-16px lh-20px '
  }
  return (
    <a hover={hover} href={url}
       className={cn('mb-10px line-clamp-2', textCls, className)}>
      {children}
    </a>
  )
}

export default BaseTitle