## A Next JS typescript-based Starter pack to start off your web3 project, clone this, and skip the initial repetitive steps.

### It includes : 

* `Rainbow Kit`, `Wagmi` & `ethers`: For connecting walling and playing with contracts
* `Tailwindcss`: CSS Framework
* `react-toastify`: for in-app alerts and info popups
* `Eslint` & `Prettier` setup
* PWA functionality using `@ducanh2912/next-pwa` 
* `Zustand` Library for state management
* `Mui` setup that works with tailwind CSS
* Dark mode and light mode, synced tailwindcss & mui dark mode and light mode

### Configurations for THEME : 
* Configure `tailwind.config.ts`, to add extend colors variables.
* Use `globals.css` to define variable colors for light mode and dark mode, but add dark mode variable colors in `[data-theme='dark']` and light mode variable colors in `:root`
* configure `darkTheme` and `lightTHeme` in `MuiThemeWrapper.tsx` to theme mui components
* Use `const {theme, toggleTheme} = useTheme()` from `TailwindThemeProvider.tsx` to get the current theme and toggle theme.

### Configurations for PWA :

* If you don't want to use PWA at all then in next.config.js just export nextConfig without withPWA.
* If you only want to allow PWA to be shown on mobile and show a Page that asks to install PWA, then in config.js make useONlyPWAOnMobile true, and edit ADDPWAPage.tsx as you wish
* Configure public/manifest.json as per your app  
