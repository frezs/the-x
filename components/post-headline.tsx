import React from 'react'
import HeadTile from '@/components/base/head-tile'
import BaseTitle from '@/components/base/base-title'
import BaseDesc from '@/components/base/base-desc'
import CardWrap from '@/components/base/card-wrap'
import { cn } from '@/lib/utils'
import DateReview from '@/components/base/date-review'
import BaseCategory from '@/components/base/base-category'

export interface IPostHeadline {

}

function PostHeadline({ className, ...props }: IPostHeadline & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <CardWrap className={cn('flex w-full flex-col', className)}>
      <HeadTile icon="i-mdi:book" label="头条" ext={[{ name: '更多 >', url: '#' }]}></HeadTile>
      <div className="flex flex-wrap justify-between">
        {
          Array(6).fill(0).map((_, index) => (
            <div key={index} className="relative w-33% flex">
              <div className="absolute top-2px left-5px font-bold text-28px color-gray-3">
                {`0${index + 1}`}
              </div>
              <div className="pl-60px flex flex-col flex-1 mb-15px">
                <BaseCategory tag={{ name: '分类', url: '#' }} author={{ name: '作者', url: '#' }}></BaseCategory>
                <BaseTitle url="">{'苹果发布新iPad，苹果发布新iPad，苹果发布新iPad'}</BaseTitle>
                <DateReview date={'1分钟前'} review={'10分钟阅读'}></DateReview>
              </div>
            </div>
          ))
        }

      </div>
    </CardWrap>
  )
}

export default PostHeadline