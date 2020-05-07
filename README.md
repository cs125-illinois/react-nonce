# @cs125/react-nonce

![npm](https://img.shields.io/npm/v/@cs125/react-nonce)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

React TypeScript support for stable browser and session unique identifiers.

## Install

```bash
npm i @cs125/react-nonce
```

## Use

First, wrap your app in the `<NonceProvider />` component:

```jsx
import { NonceProvider } from "@cs125/react-nonce"

const App: React.FC = () => {
  return (
    <NonceProvider name={"react-nonce"}>
      <RestOfYourApp />
    </NonceProvider>
  )
}
```

Then you can use the `NonceContext` to retrieve the `browser` and `tab` nonce values.
We provide a `useNonce` method that you can use in a functional component:

```jsx
import { useNonce } from "@cs125/react-nonce"

const MyComponent: React.FC = ({}) => {
  const { browser, tab } = useNonce()
}
```

The retrieved values are UUIDs.

## Demo

Visit the demo [here](https://cs125-illinois.github.io/react-nonce/).
