'use client'

import React, { useEffect, useState } from 'react'
import RainbowKitWrapper from './RainbowKitWrapper'
import { ToastContainer } from 'react-toastify'
import UILayout from './UILayout'
import { useOnlyPWAOnMobile } from '../utils/config'

const WrappersWithOnlyPwa = ({ children }: { children: React.ReactNode }) => {
  const [isPWA, setIsPWA] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (
      window.navigator.standalone ||
      window.matchMedia('(display-mode: standalone)').matches
    ) {
      setIsPWA(true)
    }

    setIsMobile(window.matchMedia('(max-width: 767px)').matches)
  }, [])

  console.log('isPWA', isPWA)
  console.log('isMobile', isMobile)
  return (
    <>
      {!isPWA && isMobile && useOnlyPWAOnMobile ? (
        <div>Add the app to your home screen to use it</div>
      ) : (
        <>
          <RainbowKitWrapper>
            <ToastContainer
              position="bottom-right"
              theme="dark"
              closeButton={false}
            />
            <UILayout>{children}</UILayout>
          </RainbowKitWrapper>
        </>
      )}
    </>
  )
}

export default WrappersWithOnlyPwa
