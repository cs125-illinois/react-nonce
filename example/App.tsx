import React from "react"
import PropTypes from "prop-types"
import { hot } from "react-hot-loader"

import { Container } from "semantic-ui-react"

import { MDXProvider } from "@mdx-js/react"
import Content from "./index.mdx"

import PrismLight from "react-syntax-highlighter/dist/esm/prism-light"
import style from "react-syntax-highlighter/dist/esm/styles/prism/tomorrow"
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash"
PrismLight.registerLanguage("bash", bash)
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx"
PrismLight.registerLanguage("jsx", jsx)

import { NonceProvider } from "@cs125/react-nonce"

const SyntaxHighlighter: React.FC<{ className: string; children: string }> = ({ className, children }) => {
  const language = className.replace(/language-/, "")
  return (
    <PrismLight style={style} language={language}>
      {children}
    </PrismLight>
  )
}
SyntaxHighlighter.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

const components = {
  code: SyntaxHighlighter,
}
const App: React.SFC = () => (
  <NonceProvider name={"react-nonce"}>
    <Container text style={{ paddingTop: 16 }}>
      <MDXProvider components={components}>
        <Content />
      </MDXProvider>
    </Container>
  </NonceProvider>
)
export default hot(module)(App)
