import { createBrowserRouter } from 'react-router-dom'

import { Application } from './pages/application'
import { SignInWithGithub } from './pages/sign-in-with-github'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignInWithGithub />,
  },
  {
    path: '/app',
    element: <Application />,
  },
])
