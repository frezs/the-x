import React from 'react'
import { cn } from '@/lib/utils'

export interface IBaseNavbarItem {
  name: string
  path: string
}

export interface IBaseNavbar {
  links: IBaseNavbarItem[]
}

function BaseNavbar({ className, ...props }: IBaseNavbar & React.HTMLAttributes<HTMLElement>) {
  const { links } = props
  return (
    <nav className={cn('relative', className)}>
      <ul className="flex justify-center items-center">
        {links!.map((item, index) => (
          <li
            className="relative mx-15px h-32px lh-32px text-16px"
            hover="before:content-empty"
            before="absolute left--50% translate-x-50% w-full bottom-0 h-4px rounded-4px bg-blue"
            key={item.name}>
            <a className="text-center" href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default BaseNavbar