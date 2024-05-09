import React from 'react'
import CardWrap from '@/components/base/card-wrap'
import HeadTile from '@/components/base/head-tile'
import BaseCategory from '@/components/base/base-category'
import BaseTitle from '@/components/base/base-title'
import DateReview from '@/components/base/date-review'
import { cn } from '@/lib/utils'
import BaseDesc from '@/components/base/base-desc'
import BaseTag, { BaseTagType } from '@/components/base/base-tag'

export interface IPostInformationProps {

}

function PostInformation({ className, ...props }: IPostInformationProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <CardWrap className={ cn('flex w-full flex-col px-0', className) }>
      <HeadTile className="px-20px" icon="i-mdi:book" label="头条" ext={ [ { name: '更多 >', url: '#' } ] }></HeadTile>
      <div className="flex flex-col">
        {
          Array(6).fill(0).map((_, index) => (
            <div key={ index } className="relative flex py-15px px-20px" hover="bg-gray-50">
              <div className="max-w-170px flex-1 mr-15px">
                <img alt="" src="/next.svg" className="w-full h-full"/>
              </div>
              <div className="flex flex-col flex-1">
                <BaseCategory className="mt-0" tag={ { name: '分类', url: '#' } } author={ { name: '作者', url: '#' } }></BaseCategory>
                <BaseTitle url="">{ '听OpenAI CEO、巴菲特、李开复谈AI取代人类工作' }</BaseTitle>
                <BaseDesc>{ '基于Transformer架构的大模型，其强大的泛化能力和自我学习特性，使得它们在某些任务中表现出接近甚至超越人类的水平。谷歌推出其最强人工智能模型Gemini，并贴出了图片展示“Gemini在大规模多' }</BaseDesc>
                <div className="flex lh-22px text-12px text-gray children:mr-10px ">
                  <BaseTag>OpenAi</BaseTag>
                  <BaseTag type={ BaseTagType.text }>AI训练text</BaseTag>
                  <BaseTag type={ BaseTagType.plain }>AI训练plain</BaseTag>
                  <span className="">14小时前</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </CardWrap>
  )
}

export default PostInformation