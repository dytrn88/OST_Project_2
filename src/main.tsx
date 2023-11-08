import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme } from '@radix-ui/themes'
import "@radix-ui/themes/styles.css";
import AppRouter from './routes/routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
      <AppRouter />
    </Theme>
  </React.StrictMode>
)
