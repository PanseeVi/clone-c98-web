import Image from 'next/image'
import './style.scss'
import React from 'react'
import hero from '~/image/Home/hero-banner.png'
import Link from 'next/link'
import Button from '@/components/share/Button/page'

export default function Hero() {
  console.log('Hero')
  return (
    <div className='hero'>
      <div className='hero-wrapper'>
        <video autoPlay loop muted>
          <source
            type='video/mp4'
            src='https://coin98.s3.ap-southeast-1.amazonaws.com/Currency/Home98Anim/clip-banner.mp4'
          />
        </video>

        <div className='banner-text container'>
          <div className='hero-content'>
            <div className='hero-content-text'>
              Everyone's Gateway <br /> To The Open Internet
            </div>
            <div className='hero-content-des'>
              Pave the way to a world where everyone can easily capture new
              opportunities to build their <br /> own future with Coin98 Super
              Wallet.
            </div>
            <div className='hero-button'>
              <Button />
            </div>
          </div>
          <div className='info-static'>
            <div className='item-static'>
              <div className='static-number'>10M+</div>
              <div className='static-name'>Worldwide Users</div>
            </div>
            <div className='item-static'>
              <div className='static-number'>170+</div>
              <div className='static-name'>Countries</div>
            </div>
            <div className='item-static'>
              <div className='static-number'>120+</div>
              <div className='static-name'>Blockchains</div>
            </div>
            <div className='item-static'>
              <div className='static-number'>15K+</div>
              <div className='static-name'>Compatible DApps</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
