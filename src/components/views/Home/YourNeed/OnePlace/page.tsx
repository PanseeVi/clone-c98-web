import React from 'react'
import './style.scss'
import yourNeed3 from '~/image/Home/your-need-3.png'
import Image from 'next/image'

export default function OnePlace() {
  return (
    <div className='one-place-wr'>
      <div className='one-place-text'>
        One place to buy, <br />
        sell digital assets <br />
        conveniently
      </div>
      <div className='one-place-img'>
        <Image src={yourNeed3} alt='' width={400} />
      </div>
    </div>
  )
}
