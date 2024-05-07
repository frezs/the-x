import React from 'react'
import { header } from '@/data/mock/common'

export default function Home() {
  const { navLinks, logo } = header
  return (
    <>
      <header className="flex h-55px justify-between items-center">
        <a href="/">
          <figure className="relative w-190px h-full">
            <img className="w-full h-full" src={logo} alt="logo"/>
          </figure>
        </a>
        <nav>
          <ul className={`flex justify-center items-center`}>
            {navLinks.map((item, index) => (
              <li
                className={`relative mx-15px h-32px lh-32px text-16px`}
                hover={`before:content-empty`}
                before={`absolute left--50% translate-x-50% w-full bottom-0 h-4px rounded-4px bg-blue`}
                key={item.name}>
                <a className={`text-center`} href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <search>

        </search>
      </header>
      <main className="flex min-h-screen flex-col items-center">
        <div className="text-2xl">This is Home!!!</div>
      </main>
    </>
  )
}
