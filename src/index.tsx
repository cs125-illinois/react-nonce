import React, { useEffect, ReactNode, useContext } from "react"
import PropTypes from "prop-types"

import { v4 as uuidv4 } from "uuid"

export interface NonceContext {
  browser: string
  tab: string
}
export const NonceContext = React.createContext<NonceContext>({ browser: "", tab: "" })

interface NonceProviderProps {
  name: string
  children: ReactNode
}
export const NonceProvider: React.FC<NonceProviderProps> = ({ name, children }) => {
  const browser = localStorage.getItem(`${name}:nonce`) || uuidv4()
  const tab = sessionStorage.getItem(`${name}:nonce`) || uuidv4()

  useEffect(() => {
    localStorage.setItem(`${name}:nonce`, browser)
    sessionStorage.setItem(`${name}:nonce`, tab)
  }, [])

  return <NonceContext.Provider value={{ browser, tab }}>{children}</NonceContext.Provider>
}
NonceProvider.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export const useNonce = (): NonceContext => {
  return useContext(NonceContext)
}
