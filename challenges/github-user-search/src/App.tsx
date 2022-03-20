import { useState } from 'react'

import styled, { ThemeProvider } from 'styled-components'
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

	const Wrapper = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;

		@media screen and (min-width: ${(props) => props.theme.tabletBreakPoint}) {
			padding: 0 98px;
		}
	`

	return (
		<ThemeProvider theme={themeMap[selectedTheme]}>
			<GlobalStyles />
			<Wrapper>
				<Header selectedTheme={selectedTheme} onThemeSelected={handleOnThemeSelected} />
				<SearchBar />
				<UserProfile />
			</Wrapper>
		</ThemeProvider>
	)
}

export default App
