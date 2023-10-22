import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Theme } from '@radix-ui/themes'
import RouterProviderInstance from './routes/routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
      <RouterProviderInstance />
    </Theme>
  </React.StrictMode>,
)
