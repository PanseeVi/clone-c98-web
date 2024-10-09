import React from 'react'
import './style.scss'
import yourNeed2 from '~/image/Home/your-need-2.png'
import Image from 'next/image'

export default function OneBrowser() {
  return (
    <div className='one-browser-wr'>
      <div className='text-content'>
        <div className='content-title'>One browser to</div>
        <div className='content-number'>
          <div className='div-value'>
            <div className='value'>120 +</div>
            <div className='value-name'> Blockchains</div>
          </div>
          <div className='div-value'>
            <div className='value'>15K +</div>
            <div className='value-name'> DApps</div>
          </div>
        </div>
      </div>
      <div className='one-browser-media'>
        <div className='one-browser-video'>
          <video width={624} loop autoPlay muted>
            <source
              src='https://coin98.s3.ap-southeast-1.amazonaws.com/Currency/Home98Anim/blockchain.mp4'
              type='video/mp4'
            />
          </video>
          <div className='one-browser-img'>
            <Image src={yourNeed2} alt='' height={396} />
          </div>
        </div>
      </div>
    </div>
  )
}
