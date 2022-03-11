import { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { GlobalStyles } from './styles/GlobalStyles'
import { darkTheme } from './styles/dark-theme'
import { lightTheme } from './styles/light-theme'

function App() {
	const [selectedTheme, setSelectedTheme] = useState<'dark' | 'light'>('dark')

	const getTheme = () => {
		switch (selectedTheme) {
			case 'dark':
				return darkTheme
			case 'light':
				return lightTheme
		}
	}

	const handleOnThemeSelected = (newTheme: 'dark' | 'light') => {
		setSelectedTheme(newTheme)
	}

	return (
		<ThemeProvider theme={getTheme()}>
			<GlobalStyles />
			<Header selectedTheme={selectedTheme} onThemeSelected={handleOnThemeSelected} />
		</ThemeProvider>
	)
}

export default App
