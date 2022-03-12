import styled from 'styled-components'
import { IconMoon } from './Icons/Moon'
import { IconSun } from './Icons/Sun'

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
	display: flex;
	align-items: center;
	gap: 16px;
`

type HeaderProps = {
	selectedTheme: 'dark' | 'light'
	onThemeSelected: (newTheme: 'dark' | 'light') => void
}

const Header: React.FC<HeaderProps> = ({ selectedTheme, onThemeSelected }) => {
	const handleOnThemeDispayClick = () => {
		onThemeSelected(selectedTheme === 'dark' ? 'light' : 'dark')
	}

	const themeToTextDisplayMap = {
		dark: (
			<>
				light <IconSun />
			</>
		),
		light: (
			<>
				dark <IconMoon />
			</>
		),
	}

	return (
		<Wrapper>
			<h1>devfinder</h1>
			<ThemeDisplay onClick={handleOnThemeDispayClick}>
				{themeToTextDisplayMap[selectedTheme]}
			</ThemeDisplay>
		</Wrapper>
	)
}

export { Header }
