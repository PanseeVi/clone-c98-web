import React from 'react'
import './style.scss'
import Image from 'next/image'
import appInfoImg1 from '~/image/Home/app-info-1.png'
import appInfoImg2 from '~/image/Home/app-info-2.png'
import appInfoImg3 from '~/image/Home/app-info-3.png'
import appInfoBg from '~/image/Home/app-info-bg.png'

interface AppInfo {
  titleInfo: string
  desInfo: string
  bgImg: any
  bgType: string
  imgInfo: any
}

export default function CardAppInfo({ AppValue }: { AppValue: AppInfo }) {
  const remakeText = (stringRemake: any) => {
    const newText = stringRemake.split('\n')
    return (
      <>
        {newText.map((line: any, index: any) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </>
    )
  }

  return (
    <div className={`app-info-wr app-info-wr--${AppValue.bgType}`}>
      <div className='app-info-content'>
        <div className='app-info-text'>
          <div className='info-title'>{remakeText(AppValue.titleInfo)}</div>
          <div className='info-des'>{remakeText(AppValue.desInfo)}</div>
        </div>
      </div>
      <div className={`app-info-img`}>
        <div className='info-img'>
          <Image src={AppValue.imgInfo} alt='' width={350} />
        </div>
        <div className='info-bg'>
          <Image src={AppValue.bgImg} alt='' width={999} />
        </div>
      </div>
    </div>
  )
}
