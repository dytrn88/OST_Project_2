import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterProviderInstance from './routes/routes.tsx'
import { Theme, ThemePanel } from '@radix-ui/themes'
import "@radix-ui/themes/styles.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
      <RouterProviderInstance />
    </Theme>
  </React.StrictMode>,
)
