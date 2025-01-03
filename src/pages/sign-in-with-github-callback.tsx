import { useEffect } from 'react'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import Cookies from 'universal-cookie'

import { useAuthenticateFromGithub } from '../http/generated/api'

export function SignInWithGithubCallback() {
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()

  const { mutateAsync: authenticateFromGithub } = useAuthenticateFromGithub()

  const code = searchParams.get('code')

  if (!code) {
    return <Navigate to="/" />
  }

  useEffect(() => {
    authenticateFromGithub({ data: { code } }).then(response => {
      const token = response.data.token

      const cookies = new Cookies()

      cookies.set('in-orbit.token', token, {
        path: '/',
        maxAge: 60 * 60 * 24,
      })

      navigate('/app')
    })
  }, [])

  return (
    <div className="h-screen flex items-center justify-center">
      <Loader2 className="size-6 text-gray-500 animate-spin" />
    </div>
  )
}
