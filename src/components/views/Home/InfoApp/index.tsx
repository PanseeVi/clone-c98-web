import React from 'react'
import './style.scss'
import CardAppInfo from '@/components/views/Home/InfoApp/CardAppInfo'
import appInfoImg1 from '~/image/Home/app-info-1.png'
import appInfoImg2 from '~/image/Home/app-info-2.png'
import appInfoImg3 from '~/image/Home/app-info-3.png'
import appInfoBg from '~/image/Home/app-info-bg.png'
import appInfoBg2 from '~/image/Home/app-info-bg-yellow.png'

const info = [
  {
    titleInfo: 'Easy to join \n in multiple ways',
    desInfo:
      'Enter the Open Internet with ease - just use your email, social accounts or create a new wallet in a single click.',
    bgImg: appInfoBg2,
    bgType: 'black',
    imgInfo: appInfoImg1,
  },
  {
    titleInfo: 'Instantly transfer money globally',
    desInfo:
      'Send and receive money to anyone, anywhere in just seconds with no barriers.',
    bgImg: appInfoBg,
    bgType: 'yellow',
    imgInfo: appInfoImg2,
  },
  {
    titleInfo: 'Accessible for all',
    desInfo:
      'Simply manage your money and take part in the global economy, no matter your experience and background.',
    bgImg: appInfoBg2,
    bgType: 'white',
    imgInfo: appInfoImg3,
  },
]

export default function InfoApp() {
  console.log('info')

  return (
    <div className='info-app'>
      <div className='info-container container'>
        <div className='info-title'>Open For Everyone, Everywhere</div>
        <div className='app-info-list'>
          {info.map((value, index) => {
            return (
              <div key={index} className='info-wr'>
                <CardAppInfo AppValue={value} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
