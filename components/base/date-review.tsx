import React from 'react'
import { cn } from '@/lib/utils'

export interface IDateReviewInfo {
  date: string
  review: string
}

function DateReview({ className, ...props }: IDateReviewInfo & React.HTMLAttributes<HTMLDivElement>) {
  const { date, review } = props
  return (
    <div className={cn(`lh-30px text-12px text-gray`, className)}>
      <span>{date}</span>
      <span className="mx-5px">·</span>
      <span>{review}</span>
    </div>
  )
}

export default DateReview