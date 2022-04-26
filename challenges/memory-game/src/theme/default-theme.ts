import { DefaultTheme } from 'styled-components'
import { colors } from './colors'

const defaultTheme: DefaultTheme = {
	primary: colors.orange,
	primaryHover: colors['faint-orange'],
	white: colors.white,
	secondary: colors['faint-gray'],
	secondaryHover: colors['light-blue'],
	secondaryActive: colors['dark-blue-gray'],
	textColor: colors['dark-gray'],
	secondaryTextColor: colors['light-blue'],
	darkBackground: colors['dark-gray'],
}

export { defaultTheme }
