import React from 'react'
import { cn } from '@/lib/utils'
import type { IExtItem } from '@/components/base/base'

export interface IHeaderTile {
  icon: string
  label: string
  ext?: IExtItem[]
}

function HeadTile({ className, children, ...props }: IHeaderTile & React.HTMLAttributes<HTMLDivElement>) {
  const { icon, ext = [], label } = props
  return (
    <div className={ cn('flex flex-inline mb-15px justify-between', className) }>
      <h3 className="font-bold lh-32px text-22px">
        <i className={ `${ icon } mb-3px mr-5px w-32px h-32px color-blue` }></i>
        { label }
      </h3>
      <div className="flex items-center">
        {
          children
            ? <>{ children }</>
            : ext.length > 0
              ? new Array(ext.length * 2 - 1).fill(0).map((_, index) => {
                if (index % 2 == 0) {
                  const item = ext[index / 2]
                  return <a hover="color-blue" key={ index } href={ item.url }>{ item.name }</a>
                } else {
                  return <span key={ index } className="color-gray mx-8px text-8px">|</span>
                }
              })
              : null
        }
      </div>
    </div>
  )
}

export default HeadTile