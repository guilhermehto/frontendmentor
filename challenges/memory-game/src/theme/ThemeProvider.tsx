import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { defaultTheme } from './default-theme'
import { GlobalStyles } from './GlobalStyles'

const ThemeProvider: React.FC = ({ children }) => {
	return (
		<>
			<GlobalStyles />
			<StyledThemeProvider theme={defaultTheme}>{children}</StyledThemeProvider>
		</>
	)
}

export { ThemeProvider }
