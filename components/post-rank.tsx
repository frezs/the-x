import React from 'react'
import HeadTile from '@/components/base/head-tile'
import BaseTitle from '@/components/base/base-title'
import BaseDesc from '@/components/base/base-desc'
import CardWrap from '@/components/base/card-wrap'
import { cn } from '@/lib/utils'
import BaseTag, { BaseTagType } from '@/components/base/base-tag'

export interface IPostTopicProps {

}

function PostRank({ className, ...props }: IPostTopicProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <CardWrap className={ cn('flex flex-col w-300px', className) }>
      <HeadTile icon="i-mdi:book" label="热榜"
                ext={ [ { name: '更多', url: '#' } ] }></HeadTile>
      {
        Array(10).fill(0).map((_, index) => (
          <div key={ index } className="relative flex py-10px cursor-pointer"
          >
            <div className="absolute top-13px left--15px">
              <BaseTag type={ BaseTagType.primary }
                       className="ml-8px py-2px px-5px bg-gray-100 text-blue-3">{ index < 10 - 1 ? `0${ index + 1 }` : index + 1 }</BaseTag>
            </div>
            <div className="pl-32px flex flex-col flex-1 mr-10px">
              <BaseTitle className="lh-24px mb-15px text-14px text-gray-600 font-400" url="">
                { '苹果发布新iPad,苹果发布新iPad,苹果发布新iPad' }
                <BaseTag type={ BaseTagType.primary }
                         className="ml-8px py-4px bg-gray-100 text-gray-400!">{ '9.6万热度' }</BaseTag>
              </BaseTitle>
            </div>
          </div>
        ))
      }
    </CardWrap>
  )
}

export default PostRank