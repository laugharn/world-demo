import { useEffect } from 'react'

import { useAuth } from 'react-use-auth'

const Page = () => {
  const { handleAuthentication } = useAuth()
  useEffect(() => {
    handleAuthentication()
  }, [])

  return <p>Redirecting</p>
}

export default Page
