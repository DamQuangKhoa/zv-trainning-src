import React, { lazy } from 'react'
// import NotFoundPage from "./pages/404/components/App";

// import GlobalLayOut from './common/GlobalLayout'
import { BlankLayout } from './common/BlankLayout'
import GlobalLayOut from './common/GlobalLayout'

// import Home from './pages/Home'

const Home = lazy(() => import('./pages/Home'))
const DetailPage = lazy(() => import('./pages/Detail'))

const route = [
  {
    path: '/',
    exact: true,
    auth: false,
    layout: GlobalLayOut,
    main: props => <Home router={props} />,
  },
  {
    path: '/:id',
    exact: true,
    auth: false,
    layout: GlobalLayOut,
    main: props => <DetailPage router={props} />,
  },
]

export default route
