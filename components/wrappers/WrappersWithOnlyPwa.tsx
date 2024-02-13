'use client'
import React, { useEffect, useState } from 'react'
import RainbowKitWrapper from './RainbowKitWrapper'
import UILayout from './UILayout'
import { useOnlyPWAOnMobile } from '../../utils/config'
import AddPWAPage from '../pages/home/AddPWAPage'
import MuiThemeWrapper from './MuiThemeWrapper'
import ThemeProvider from './TailwindThemeProvider'
import { Toaster } from 'react-hot-toast'

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

  return (
    <ThemeProvider>
      <MuiThemeWrapper>
        <>
          {!isPWA && isMobile && useOnlyPWAOnMobile ? (
            <AddPWAPage />
          ) : (
            <>
              <RainbowKitWrapper>
                <Toaster position={'top-center'} />
                <UILayout>{children}</UILayout>
              </RainbowKitWrapper>
            </>
          )}
        </>
      </MuiThemeWrapper>
    </ThemeProvider>
  )
}

export default WrappersWithOnlyPwa
