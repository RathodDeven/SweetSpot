# SweetSpot

> A decentralized app that lets users earn and stake tokens to support impactful projects through completing quests, staking, and donations. Built with Next.js, RainbowKit, and smart contracts.

### Getting Started

1. Clone the repository

```sh
git clone https://github.com/HandProtocol/SweetSpot.git
cd SweetSpot
```

2. Install dependencies using pnpm

```sh
pnpm install
```

3. Copy the sample environment file and configure environment variables

```sh
cp sample.env .env
```

4. Configure the following environment variables in `.env`:

- `NEXT_PUBLIC_RAINBOW_KIT_PROJECT_ID`: Get from [WalletConnect Cloud](https://cloud.walletconnect.com/)
- `NEXT_PUBLIC_STS_TOKEN_URL`: Your STS token URL
- `NEXT_PUBLIC_PASSPORT_SCORER_API_KEY`: Get from [Gitcoin Passport](https://developer.passport.xyz/)

5. Start the development server

```sh
pnpm dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### This repo is a fork of a starter pach that includes :

- `Rainbow Kit`, `Wagmi` & `ethers`: For connecting wallet and playing with contracts
- `Tailwindcss`: CSS Framework
- `react-hot-toast`: for in-app alerts and info popups
- `Eslint` & `Prettier` setup
- PWA functionality using `@ducanh2912/next-pwa`
- `Zustand` Library for state management
- `Mui` setup that works with tailwind CSS
- Dark mode and light mode, synced tailwindcss & mui dark mode and light mode

### Configurations for THEME :

- Configure `tailwind.config.ts`, to add extend colors variables.
- Use `globals.css` to define variable colors for light mode and dark mode, but add dark mode variable colors in `[data-theme='dark']` and light mode variable colors in `:root`
- configure `darkTheme` and `lightTHeme` in `MuiThemeWrapper.tsx` to theme mui components
- Use `const {theme, toggleTheme} = useTheme()` from `TailwindThemeProvider.tsx` to get the current theme and toggle the theme.

### PWA Setup out of box :

- Configure `public/manifest.json` as per your app , to change app name and app icon for your PWA app.
