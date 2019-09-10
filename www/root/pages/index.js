import { useAuth } from 'react-use-auth'

export default () => {
  const { isAuthenticated, login, logout } = useAuth()

  return (
    <div>
      {!isAuthenticated() && <button onClick={login}>Login</button>}
      {isAuthenticated() && <button onClick={logout}>Logout</button>}
    </div>
  )
}
