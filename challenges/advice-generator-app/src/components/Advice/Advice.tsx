import { ReactNode } from 'react'
import mobileDividerSvg from '../../assets/pattern-divider-mobile.svg'
import desktopDividerSvg from '../../assets/pattern-divider-desktop.svg'

type AdviceProps = {
	title: ReactNode
	button?: ReactNode
}

const Advice: React.FC<AdviceProps> = ({ children, title, button }) => {
	const isDesktop = window.innerWidth > 780

	return (
		<div className="bg-dark-gray-blue rounded-xl px-6 lg:px-10 pt-10 lg:pt-12 text-center flex flex-col lg:max-w-custom-lg">
			{title && <div className="mb-6">{title}</div>}
			<h1 className="text-cyan text-2xl mb-6 lg:mb-10 lg:text-3xl leading-normal">
				{children}
			</h1>
			<img src={isDesktop ? desktopDividerSvg : mobileDividerSvg} />
			{button && <div className="relative top-7 lg:top-9 self-center">{button}</div>}
		</div>
	)
}

export { Advice }
