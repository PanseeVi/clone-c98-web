import React from 'react'
import styles from './footerStyle.module.scss'
import Link from 'next/link'
import logoC98 from '~/image/logoC98.png'

import Image from 'next/image'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className='footer-wr'>
        <div className='footer-container container'>
          <div className='footer-menu-container'>
            <div className='footer-logo'>
              <div className='logo-c98'>
                <Image className='logo-c98' src={logoC98} alt='' />
              </div>
              <div className='social-icon-list'>
                <Link href=''>
                  <div className='ico-facebook social-icon'></div>
                </Link>
                <Link href=''>
                  <div className='ico-discord social-icon'></div>
                </Link>
                <Link href=''>
                  <div className='ico-telegram social-icon'></div>
                </Link>
                <Link href=''>
                  <div className='ico-google social-icon'></div>
                </Link>
                <Link href=''>
                  <div className='ico-twitter social-icon'></div>
                </Link>
                <Link href=''>
                  <div className='ico-chat social-icon'></div>
                </Link>
              </div>
            </div>
            <div className='footer-menu'>
              <div className='menu-box'>
                <p className='menu-title'>Products</p>
                <div className='menu-list'>
                  <Link href=''>
                    <div className='menu-item'>Coin98 Super Wallet</div>
                  </Link>
                  <Link href=''>
                    <div className='menu-item'>Zen Card</div>
                  </Link>
                  <Link href=''>
                    <div className='menu-item'>Ramper SDKs</div>
                  </Link>
                </div>
              </div>
              <div className='menu-box'>
                <p className='menu-title'>Resources</p>
                <div className='menu-list'>
                  <Link href=''>
                    <div className='menu-item'>User Support</div>
                  </Link>
                  <Link href=''>
                    <div className='menu-item'>Audit</div>
                  </Link>
                  <Link href=''>
                    <div className='menu-item'>Brand Assets</div>
                  </Link>
                  <Link href=''>
                    <div className='menu-item'>Terms of Service</div>
                  </Link>
                  <Link href=''>
                    <div className='menu-item'>Privacy Policy</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-text'>
            Copyright © 2024 Coin98 Wallet. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  )
}
