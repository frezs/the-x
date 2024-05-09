import React from 'react'
import { cn } from '@/lib/utils'
import DateReview from '@/components/base/date-review'
import type { ICover, IExtItem } from '@/components/base/base'
import HeadTile from '@/components/base/head-tile'
import BaseTitle, { ITitleType } from '@/components/base/base-title'
import BaseDesc from '@/components/base/base-desc'
import BaseCategory from '@/components/base/base-category'
import CardWrap from '@/components/base/card-wrap'

export interface IRecommendItem {
  url: string
  cover: ICover
  tags: IExtItem[]
  author: IExtItem
  title: string
  desc: string
  create: string
  times: string
}

export interface IPostRecommend {
  module: string
  icon: string
  color: string
  ext: IExtItem[],
  items: IRecommendItem[]
}

export interface IPostRecommendProps {
  recommend: IPostRecommend
}

export interface IPostRecommendItemProps {
  item: IRecommendItem
}

export function PostRecommend({ className, ...props }: IPostRecommendProps & React.HTMLAttributes<HTMLDivElement>) {
  const { recommend } = props
  return (

    <CardWrap className={cn('flex flex-col w-760px', className)}>
      <HeadTile icon={recommend.icon} label={recommend.module} ext={recommend.ext}></HeadTile>
      <div className="flex justify-between">
        < PostRecommendFirstItem item={recommend.items[0]}/>
        <div className="flex-1 pl-20px flex flex-col">
          {
            recommend.items.map((item, index) => {
              if (index > 0 && index < 5) return <PostRecommendItem key={index} item={item}/>
            })
          }</div>
      </div>
    </CardWrap>
  )
}

export function PostRecommendFirstItem({ className, ...props }: IPostRecommendItemProps & React.HTMLAttributes<HTMLDivElement>) {
  const { url, cover, tags, author, title, desc, create, times } = props.item
  return (
    <div className={cn('flex-1 ', className)}>
      <div className="w-full h-270px">
        <img src={cover.url} alt={cover.name} className="w-full h-full"/>
      </div>
      <BaseCategory tag={tags[0]} author={author}></BaseCategory>
      <BaseTitle type={ITitleType.primary} url={url}>{title}</BaseTitle>
      <BaseDesc>{desc}</BaseDesc>
      <DateReview date={create} review={times}></DateReview>
    </div>
  )
}

export function PostRecommendItem({ className, ...props }: IPostRecommendItemProps & React.HTMLAttributes<HTMLDivElement>) {
  const { url, cover, tags, author, title, desc, create, times } = props.item
  return (
    <div className="flex mb-20px justify-between last:mb-0">
      <div className="flex flex-col">
        <BaseCategory tag={tags[0]} author={author}></BaseCategory>
        <BaseTitle url={url}>{title}</BaseTitle>
        <DateReview date={create} review={times}></DateReview>
      </div>
      <div className="w-100px min-w-100px h-100px">
        <img src={cover.url} alt={cover.name} className="w-full h-full"/>
      </div>
    </div>
  )
}

export default PostRecommend