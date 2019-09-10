import Cookie from 'js-cookie'
import createUseContext from 'constate'
import { useEffect, useState } from 'react'

export const useAuth = ({ user: userProp }) => {
  const [user, setUser] = useState(userProp || {})

  const isAuthenticated = () => {
    const cookie = Cookie.get('world_auth')

    return Boolean(cookie)
  }

  const login = () => {
    const obj = {
      email: 'world_auth@amherst.com',
    }

    Cookie.set('world_auth', obj)

    setUser(obj)
  }

  const logout = () => {
    Cookie.remove('world_auth')

    setUser({})
  }

  useEffect(() => {
    const cookie = Cookie.getJSON('world_auth')

    if (cookie) {
      setUser(cookie)
    }
  }, [])

  return { isAuthenticated, login, logout, user }
}

export default createUseContext(useAuth)
