import BaseLogo from '@/components/base/base-logo'
import BaseNavbar, { type IBaseNavbarItem } from '@/components/base/base-navbar'
import BaseSearch from '@/components/base/base-search'
import React from 'react'

export interface IHeader {
  logo?: string
  navItems: IBaseNavbarItem[]
  searchable?: boolean
  onSearch?: (value: string) => void
}

function Header({ className, children, ...props }: IHeader & React.HTMLAttributes<HTMLDivElement>) {
  const { logo = '/next.svg', navItems, searchable = true, onSearch } = props
  return (
    <header className="flex h-55px justify-between items-center">
      <BaseLogo path={logo} src={logo}></BaseLogo>
      <BaseNavbar links={navItems}></BaseNavbar>
      {
        searchable
          ? (
            <div className="relative flex justify-end min-w-300px">
              <div className="mr-10px absolute"></div>
              <BaseSearch onSearch={onSearch}></BaseSearch>
            </div>)
          : children
      }
    </header>
  )
}

export default Header