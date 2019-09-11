import createUseContext from 'constate'
import { useState } from 'react'

const useApp = () => {
  const [app, setApp] = useState({})

  return { app }
}

export default createUseContext(useApp)
