import React from 'react'
import './style.scss'

export default function DoMore() {
  console.log('Do more')
  return (
    <div className='do-more-wr container'>
      <div className='do-more-content'>
        <div className='do-more-text'>Do More, Worry Less</div>
        <div className='do-more-media'>
          <video width={640} autoPlay muted>
            <source
              src='https://coin98.s3.ap-southeast-1.amazonaws.com/Currency/Home98Anim/security.mp4'
              type='video/mp4'
            />
          </video>
        </div>
        <div className='do-more-info'>
          <div className='more-info-item'>
            <span className='key-ico'></span>
            <h5 className='info-item-text'>
              Full control over your assets. <br />
              Your keys, your coins.
            </h5>
          </div>
          <div className='more-info-item'>
            <span className='shield-ico'></span>
            <h5 className='info-item-text'>
              Multi-layered security with hardware wallet support.
            </h5>
          </div>
          <div className='more-info-item'>
            <span className='protect-x-ico'></span>
            <h5 className='info-item-text'>
              Take control back by revoking your token approvals.
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}
