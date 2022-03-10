import { useState } from 'react'
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

const ThemeSelector = () => {
	const [selectedTheme, setSelectedTheme] = useState('dark')
	return <ThemeDisplay>{selectedTheme}</ThemeDisplay>
}

const Header = () => (
	<Wrapper>
		<h1>devfinder</h1>
		<ThemeSelector />
	</Wrapper>
)

export { Header }
