'use client'

import React, { useState, useRef, useEffect, useMemo } from 'react'
import { cn } from '@/lib/utils'

export interface IBaseSearchProps {
  placeholder?: string
  onClick?: () => void
  onChange?: (keyword: string) => void
  onSearch?: (keyword: string) => void
}

function BaseSearch({ className, children, ...props }: IBaseSearchProps & React.HTMLAttributes<HTMLDivElement>) {
  const { placeholder = '输入搜索关键字', onClick, onChange, onSearch } = props
  const inputRef = useRef<HTMLInputElement>(null) // 创建input的ref
  const [getValue, setValue] = useState('')
  const [getFocus, setFocus] = useState(false)

  useEffect(() => {
    const handleFocus = () => {
      // 在这里可以添加聚焦时的逻辑
      setFocus(true)
    }
    const handleBlur = () => {
      // 失去焦点时的逻辑
      setFocus(false)
    }
    if (inputRef.current) {
      inputRef.current.addEventListener('focus', handleFocus)
      inputRef.current.addEventListener('blur', handleBlur)

      return () => {
        inputRef.current!.removeEventListener('focus', handleFocus)
        inputRef.current!.removeEventListener('blur', handleBlur)
      }
    }
  }, [inputRef])

  const inputProps = useMemo(() => ({
    ref: inputRef, // 将ref添加到inputProps
    placeholder,
    value: getValue,
    type: 'text',
    onChange: (e: any) => {
      const keyword = e.target.value
      setValue(keyword)
      onChange && onChange(keyword)
    }
  }), [getValue, placeholder, onChange])

  const buttonProps = useMemo(() => ({
    onClick: () => {
      onSearch && onSearch(getValue)
    }
  }), [getValue, onSearch])

  return (
    <div
      onClick={onClick}
      className={cn('flex items-center py-5px px-15px rounded-4px bg-gray-200', className, getFocus ? 'flex-1' : '')}>
      <input className="flex-1 pr-10px outline-none bg-transparent text-14px"
             aria-label="搜索关键字"  {...inputProps} />
      <button aria-label="搜索" className="i-simple:magnifier" {...buttonProps} ></button>
    </div>
  )
}

export default BaseSearch
