import React from 'react'
import './style.scss'

export default function OnePlatform() {
  return (
    <div className='one-platform-wr'>
      <div className='one-platform-text'>
        One platform for multiple earning ways
      </div>
      <div className='one-platform-video'>
        <video width={518} autoPlay loop muted>
          <source
            type='video/mp4'
            src='https://coin98.s3.ap-southeast-1.amazonaws.com/Currency/Home98Anim/circle-token.mp4'
          />
        </video>
      </div>
    </div>
  )
}
