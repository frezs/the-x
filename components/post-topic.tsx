import React from 'react'
import HeadTile from '@/components/base/head-tile'
import BaseTitle from '@/components/base/base-title'
import BaseDesc from '@/components/base/base-desc'
import CardWrap from '@/components/base/card-wrap'
import { cn } from '@/lib/utils'

export interface IPostTopicProps {

}

function PostTopic({ className, ...props }: IPostTopicProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <CardWrap className={cn('flex flex-col w-300px', className)}>
      <HeadTile icon="i-mdi:book" label="话题"
                ext={[{ name: '更多', url: '#' }]}></HeadTile>
      {
        Array(5).fill(0).map((_, index) => (
          <div key={index} className="relative flex py-10px cursor-pointer"
               before="last:content-none content-empty absolute bottom-0 left-2.5% w-95% h-0.5px bg-gray-200"
          >
            <div className="flex flex-col flex-1 mr-10px">
              <BaseTitle className="mb-15px" url="">{'苹果发布新iPad'}</BaseTitle>
              <BaseDesc>{'5月7日晚10点苹果公司举行了盛大的新品发布会，其中最引人注目的无疑是全新'}</BaseDesc>
            </div>
            <div className="w-60px min-w-60px h-60px">
              <img className="w-full h-full" alt="" src="/next.svg"/>
            </div>
          </div>
        ))
      }
    </CardWrap>
  )
}

export default PostTopic