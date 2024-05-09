import React from 'react'
import { cn } from '@/lib/utils'

export enum BaseTagType {
  primary,
  plain,
  text,
}

export interface IBaseTagProps {
  type?: BaseTagType
  url?: string
}

function BaseTag({ className, hover, children, ...props }: IBaseTagProps & React.HTMLAttributes<HTMLElement>) {
  const { type = BaseTagType.primary, url } = props
  const defaultCls = 'lh-22px text-12px px-8px cursor-pointer text-gray '
  const activeCls = 'bg-blue-1 rounded-3px color-blue-6'
  let retCls = ''
  let hoverCls = ''
  switch (type) {
    case BaseTagType.text:
      retCls = defaultCls
      hoverCls = 'color-blue-6'
      break
    case BaseTagType.plain:
      retCls = defaultCls
      hoverCls = activeCls
      break
    default:
      retCls = cn(defaultCls, activeCls)
  }
  return (
    <a href={ url } className={ cn(retCls, className) } hover={ cn(hoverCls, hover) }>{ children }</a>
  )
}

export default BaseTag