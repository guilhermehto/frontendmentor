import { GlobalStyles } from '../../theme/GlobalStyles'
import { Heading as HeadingComponent } from './Heading'

export const Heading = () => (
	<>
		<GlobalStyles />
		<HeadingComponent level={1}>Heading story</HeadingComponent>
	</>
)
