import React from "react"

import { useNonce } from "@cs125/react-nonce"

export const BrowserNonce: React.FC = () => {
  const { browser } = useNonce()
  return <kbd>{browser}</kbd>
}

export const TabNonce: React.FC = () => {
  const { tab } = useNonce()
  return <kbd>{tab}</kbd>
}
