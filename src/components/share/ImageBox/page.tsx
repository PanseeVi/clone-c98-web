import Image from 'next/image'
import style from './imageBoxStyle.module.scss'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface imageBoxProps {
  src: any
  className?: string
  objectFit?: string
  onClick?: () => void
}

export default function ImageBox({
  src,
  className,
  objectFit,
  onClick,
}: imageBoxProps) {
  return (
    <div className={twMerge(style.imageBox, className)} onClick={onClick}>
      <Image
        src={src}
        fill
        className='image'
        alt=''
        {...(objectFit && { objectFit })}
      />
    </div>
  )
}
