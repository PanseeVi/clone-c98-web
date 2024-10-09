import React from 'react'
import styles from './headerStyle.module.scss'
import logoC98 from '~/image/logoC98.png'
import ImageBox from '@/components/share/ImageBox/page'
import Link from 'next/link'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className='header-wr '>
        <div className='header-content container'>
          <Link href='/' className='header-logo'>
            <ImageBox src={logoC98} />
          </Link>
          <div className='header-nav'>
            <div className='menu'>
              <div className='menu-item-container'>
                <Link href='' className='menu-item'>
                  Products
                </Link>
                <div className='menu-child'>
                  <div className='menu-child-container'>
                    <Link href='/'>
                      <div className='child-item'>Coin98 Super Wallet</div>
                    </Link>
                    <Link href='/'>
                      <div className='child-item'>Zen Card</div>
                    </Link>
                    <Link href='/'>
                      <div className='child-item'>Ramper SDKs</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='menu-item-container'>
                <Link href='' className='menu-item'>
                  Developers
                </Link>
                <div className='menu-child'>
                  <div className='menu-child-container'>
                    <Link href='/'>
                      <div className='child-item'>Documentation</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='menu-item-container'>
                <Link href='' className='menu-item'>
                  Ecosystem
                </Link>
                <div className='menu-child'>
                  <div className='menu-child-container'>
                    <Link href='/'>
                      <div className='child-item'>Blockchains</div>
                    </Link>
                    <Link href='/'>
                      <div className='child-item'>Assets</div>
                    </Link>
                    <Link href='/'>
                      <div className='child-item'>DApps</div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='menu-item-container'>
                <Link href='' className='menu-item'>
                  Community
                </Link>
                <div className='menu-child'>
                  <div className='menu-child-container'>
                    <Link href='/'>
                      <div className='child-item'>C98 Token</div>
                    </Link>
                    <Link href='/'>
                      <div className='child-item'>Merch Store</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='header-btn-wr'>
            <button className='button button--dark'>Download App</button>
          </div>
        </div>
      </div>
    </div>
  )
}
