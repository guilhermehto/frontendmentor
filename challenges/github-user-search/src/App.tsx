import { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { GlobalStyles } from './styles/GlobalStyles'
import { darkTheme } from './styles/dark-theme'
import { lightTheme } from './styles/light-theme'
import { SearchBar } from './components/SearchBar'
import { UserProfile } from './components/UserProfile'

function App() {
	const [selectedTheme, setSelectedTheme] = useState<'dark' | 'light'>('dark')

	const themeMap = {
		dark: darkTheme,
		light: lightTheme,
	}

	const handleOnThemeSelected = (newTheme: 'dark' | 'light') => {
		setSelectedTheme(newTheme)
	}

	return (
		<ThemeProvider theme={themeMap[selectedTheme]}>
			<GlobalStyles />
			<Header selectedTheme={selectedTheme} onThemeSelected={handleOnThemeSelected} />
			<SearchBar />
			<UserProfile />
		</ThemeProvider>
	)
}

export default App
