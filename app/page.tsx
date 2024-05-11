'use client'

import React from 'react'
import { header } from '@/data/mock/common'
import PostRecommend from '@/components/post-recommend'
import Header from '@/components/layout/header'
import PostTopic from '@/components/post-topic'
import '@/styles/base.css'
import PostHeadline from '@/components/post-headline'
import PostInformation from '@/components/post-information'
import PostRank from '@/components/post-rank'

function onSearch(value: string) {
  // 搜索逻辑
  console.log('点击搜索:', value)
}

export default function Home() {
  const { navLinks, logo, recommend } = header
  return (
    <>
      <Header logo="/next.svg" navItems={navLinks} onSearch={onSearch}></Header>
      <main className="mt-15px flex min-h-screen flex-col items-center">
        <div className="flex justify-between children:mb-15px last:mb-0">
          <PostRecommend recommend={recommend} className="mr-10px"></PostRecommend>
          <PostTopic className=""></PostTopic>
        </div>
        <div className="flex flex-col mb-15px children:mb-15px last:mb-0">
          <PostHeadline></PostHeadline>
          <div className="flex justify-between children:mb-15px last:mb-0">
            <PostInformation className="mr-10px w-760px"></PostInformation>
            <PostRank className="min-w-300px"></PostRank>
          </div>
        </div>
      </main>
    </>
  )
}
