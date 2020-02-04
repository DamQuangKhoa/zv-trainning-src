import React, { lazy } from 'react'
// import NotFoundPage from "./pages/404/components/App";

// import GlobalLayOut from './common/GlobalLayout'
import { BlankLayout } from './common/BlankLayout'

const HomePage = lazy(() => import('./pages/Home'))

const route = [
  {
    path: '/',
    exact: true,
    auth: false,
    layout: BlankLayout,
    main: props => <HomePage router={props} />,
  },
]

export default route
