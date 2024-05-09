import React from 'react'
import CardWrap from '@/components/base/card-wrap'
import HeadTile, { type IHeaderTile } from '@/components/base/head-tile'
import { cn } from '@/lib/utils'

function BaseCardWrap({ className, children, ...props }: Partial<IHeaderTile> & React.HTMLAttributes<HTMLDivElement>) {
  const { icon, label, ext } = props
  return (
    <CardWrap className={ cn('flex w-full flex-col', className) }>
      <HeadTile icon={ icon ?? 'i-mdi:book' } label={ label ?? '' } ext={ ext }></HeadTile>
      { children }
    </CardWrap>
  )
}

export default BaseCardWrap