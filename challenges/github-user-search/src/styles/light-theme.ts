import { colors } from './colors'
import { commonValues } from './common-theme'

const lightTheme = {
	...commonValues,
	backgroundColor: colors.lightGrey,
	primary: colors.blue,
	textColor: colors.grey,
	buttonTextColor: colors.white,
	headingColor: colors.darkGrey,
	foregroundColor: colors.white,
	activeColor: colors.paleBlue,
	secondaryActiveColor: colors.black,
	disabledColor: colors.faintBlue,
	shadow: '0 16px 30px -10px hsl(227, 46%, 51%, 20%)',
}

export { lightTheme }
