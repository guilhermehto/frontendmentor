import { colors } from './colors'
import { commonValues } from './common-theme'

const darkTheme = {
	...commonValues,
	backgroundColor: colors.deepDarkBlue,
	primary: colors.blue,
	textColor: colors.white,
	buttonTextColor: colors.white,
	headingColor: colors.white,
	foregroundColor: colors.darkBlue,
	activeColor: colors.paleBlue,
	secondaryActiveColor: colors.lightPaleBlue,
	disabledColor: colors.faintGrey,
}
export { darkTheme }
