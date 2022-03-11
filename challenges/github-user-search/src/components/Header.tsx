import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const ThemeDisplay = styled.div`
	font-size: 13px;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 2.5px;
`

type HeaderProps = {
	selectedTheme: 'dark' | 'light'
	onThemeSelected: (newTheme: 'dark' | 'light') => void
}

const Header: React.FC<HeaderProps> = ({ selectedTheme, onThemeSelected }) => {
	const handleOnThemeDispayClick = () => {
		onThemeSelected(selectedTheme === 'dark' ? 'light' : 'dark')
	}
	const themeToTextDisplay = {
		dark: 'light',
		light: 'dark',
	}

	return (
		<Wrapper>
			<h1>devfinder</h1>
			<ThemeDisplay onClick={handleOnThemeDispayClick}>
				{themeToTextDisplay[selectedTheme]}
			</ThemeDisplay>
		</Wrapper>
	)
}

export { Header }
