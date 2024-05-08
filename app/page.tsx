'use client'

import React from 'react'
import { header } from '@/data/mock/common'
import PostRecommend from '@/components/post-recommend'
import Header from '@/components/layout/header'
import PostTopic from '@/components/post-topic'
import '@/styles/base.css'
import PostHeadline from '@/components/post-headline'

function onSearch(value: string) {
  // 搜索逻辑
  console.log('点击搜索:', value)
}

export default function Home() {
  const { navLinks, logo, recommend } = header
  return (
    <>
      <Header logo="/next.svg" navItems={navLinks} onSearch={onSearch}></Header>
      <main className="flex min-h-screen flex-col items-center">
        <div className="flex justify-between mb-15px">
          <PostRecommend recommend={recommend} className="mr-10px"></PostRecommend>
          <PostTopic></PostTopic>
        </div>
        <div className="flex flex-col mb-15px">
          <PostHeadline></PostHeadline>
        </div>
      </main>
    </>
  )
}
