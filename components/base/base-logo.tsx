import React from 'react'
import { cn } from '@/lib/utils'

export interface props {
  href?: string
  path?: string // 本地路径
  src?: string
  alt?: string
}

function BaseLogo({ className, ...props }: props & React.HTMLAttributes<HTMLDivElement>) {
  const { src, path, href = '/', alt = 'logo' } = props
  return (
    <a href={href}>
      <figure className={cn('relative w-190px h-full', className)}>
        <img className="w-full h-full" src={path ?? src} alt={alt}/>
      </figure>
    </a>
  )
}

export default BaseLogo