import React from 'react'
import './style.scss'
import OneHome from '@/components/views/Home/YourNeed/OneHome/page'
import OneBrowser from '@/components/views/Home/YourNeed/OneBrowser/page'
import OnePlace from '@/components/views/Home/YourNeed/OnePlace/page'
import OnePlatform from '@/components/views/Home/YourNeed/OnePlatform/page'

export default function YourNeed() {
  console.log('need')
  return (
    <div className='need-wr container'>
      <div className='need-title'>
        One Wallet <br />
        For All Your Needs
      </div>
      <div className='need-content'>
        <div className='item-1'>
          <OneHome />
        </div>
        <div className='item-2'>
          <OneBrowser />
        </div>
        <div className='item-3'>
          <OnePlace />
        </div>
        <div className='item-4'>
          <OnePlatform />
        </div>
      </div>
    </div>
  )
}
