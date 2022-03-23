import { ReactNode } from 'react'
import mobileDividerSvg from '../../assets/pattern-divider-mobile.svg'
import { AdviceButton } from './AdviceButton'

type AdviceProps = {
	title: ReactNode
}

const Advice: React.FC<AdviceProps> = ({ children, title }) => {
	return (
		<div className="bg-dark-gray-blue rounded-xl px-6 pt-10 text-center flex flex-col ">
			{title && <div className="mb-6">{title}</div>}
			<h1 className="text-cyan text-2xl mb-6">{children}</h1>
			<img src={mobileDividerSvg} />
			<AdviceButton />
		</div>
	)
}

export { Advice }
