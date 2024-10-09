import React from 'react'
import './style.scss'
import Image from 'next/image'
import yourNeed1 from '~/image/Home/your-need-1.png'

export default function OneHome() {
  return (
    <div className='one-home-wr'>
      <div className='text-content'>
        One home for <br /> for all your crypto assets
      </div>
      <div className='your-need-img'>
        <Image src={yourNeed1} alt='' width={455} />
      </div>
    </div>
  )
}
