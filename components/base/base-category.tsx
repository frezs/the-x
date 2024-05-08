import React from 'react'
import { cn } from '@/lib/utils'
import { IExtItem } from '@/components/base/types'

export interface IBaseCategoryItem {
  name: string
  url: string
}

export interface IBaseCategoryProps {
  icon?: string
  tag: IBaseCategoryItem
  author?: IBaseCategoryItem
}

function BaseCategory({ className, ...props }: IBaseCategoryProps & React.HTMLAttributes<HTMLDivElement>) {
  const { icon = 'i-mdi:book', author, tag } = props
  return (
    <div className={cn('flex my-10px items-center text-14px')}>
      <i className={cn('mr-5px w-20px h-20px color-gray', icon)}></i>
      <a hover="color-blue" href={tag.url}>{tag.name}</a>
      <span className="color-gray mx-8px text-8px">|</span>
      {
        author ? <a hover="color-blue" href={author?.url}>{author?.name}</a> : <></>
      }
    </div>
  )
}

export default BaseCategory