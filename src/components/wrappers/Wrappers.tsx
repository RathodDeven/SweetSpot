'use client'
import React from 'react'
import RainbowKitWrapper from './RainbowKitWrapper'
import UILayout from './UILayout'
import MuiThemeWrapper from './MuiThemeWrapper'
import ThemeProvider from './TailwindThemeProvider'
import { Toaster } from 'react-hot-toast'
import { NavigationProvider } from '../../contexts/NavigationContext'

const Wrappers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <MuiThemeWrapper>
        <NavigationProvider>
          <RainbowKitWrapper>
            <Toaster position={'top-center'} />
            <UILayout>{children}</UILayout>
          </RainbowKitWrapper>
        </NavigationProvider>
      </MuiThemeWrapper>
    </ThemeProvider>
  )
}

export default Wrappers
