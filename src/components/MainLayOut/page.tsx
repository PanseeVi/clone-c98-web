import Footer from '@/components/MainLayOut/Footer/page'
import Header from '@/components/MainLayOut/Header/page'
import React, { Fragment } from 'react'

export default function MainLayOut({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}
