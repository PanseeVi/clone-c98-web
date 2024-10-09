import React from 'react'
import styles from './homePageStyle.module.scss'
import Hero from '@/components/views/Home/Hero/page'
import InfoApp from '@/components/views/Home/InfoApp/page'
import YourNeed from '@/components/views/Home/YourNeed/page'
import DoMore from '@/components/views/Home/DoMore/page'
import Future from '@/components/views/Home/Future/page'

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
