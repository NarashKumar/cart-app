import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'

import appStore, { persistor } from './utils/redux/appStore.jsx'
import { RouterProvider } from 'react-router'
import { routes } from './routes/Routes.jsx'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <PersistGate loading={null} persistor={persistor} >
  <StrictMode>
    <RouterProvider router={routes} future={{ v7_relativeSplatPath: true, unstable_includeLocation: true }}/>
    {/* <App /> */}
  </StrictMode>
    </PersistGate>
  </Provider>
)
