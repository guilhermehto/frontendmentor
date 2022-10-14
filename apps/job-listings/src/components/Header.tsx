import mobileHeader from '/bg-header-mobile.svg'
import desktopHeader from '/bg-header-desktop.svg'

const Header = () => (
	<header className="bg-desaturated-cyan">
		<img className="hidden xs:block" src={desktopHeader} alt="green shapes" />
		<img className="xs:hidden" src={mobileHeader} alt="green shapes" />
	</header>
)

export { Header }
