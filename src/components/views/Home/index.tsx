import React from 'react'
import styles from './homePageStyle.module.scss'
import Hero from '@/components/views/Home/Hero'
import InfoApp from '@/components/views/Home/InfoApp'
import YourNeed from '@/components/views/Home/YourNeed'
import DoMore from '@/components/views/Home/DoMore'
import Future from '@/components/views/Home/Future'

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className='home'>
        <Hero />
        <InfoApp />
        <YourNeed />
        <DoMore />
        <Future />
      </div>
    </div>
  )
}
