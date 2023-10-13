import { ThemeProvider } from 'styled-components'

import { Button } from './components/Button'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>ignite timer</h1>
      <Button variant="secondary" />
      <GlobalStyle />
    </ThemeProvider>
  )
}
