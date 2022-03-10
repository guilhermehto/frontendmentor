import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'

import { darkTheme } from './styles/dark-theme'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<Header />
		</ThemeProvider>
	)
}

export default App
