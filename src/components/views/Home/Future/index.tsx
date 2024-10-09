import React from 'react'
import './style.scss'
import FutureImg from '~/image/Home/last-picture.png'
import Image from 'next/image'
import Button from '@/components/share/Button/page'

export default function Future() {
  return (
    <div>
      <div className='future-wr container'>
        <div className='future-content'>
          Build Your Future <br />
          In Your Own Way
          <div className='future-button'>
            <Button />
          </div>
        </div>
        <div className='last-picture'>
          <Image className='image-future' src={FutureImg} alt='' />
        </div>
      </div>
    </div>
  )
}
