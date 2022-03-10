import { ThemeProvider } from 'styled-components'

import { darkTheme } from './styles/dark-theme'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<div>Github user search</div>
		</ThemeProvider>
	)
}

export default App
