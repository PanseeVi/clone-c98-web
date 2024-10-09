import React from 'react'
import './style.scss'
import Link from 'next/link'

export default function Button() {
  return (
    <div className='button-wr'>
      <button className='button-action'>
        <div className='button-content'>
          <div className='button-text'>Download App</div>
        </div>
      </button>
    </div>
  )
}
