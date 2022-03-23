import { ReactNode } from 'react'
import mobileDividerSvg from '../../assets/pattern-divider-mobile.svg'

type AdviceProps = {
	title: ReactNode
}

const Advice: React.FC<AdviceProps> = ({ children, title }) => {
	return (
		<div className="bg-dark-gray-blue rounded-xl px-6 py-10 text-center flex flex-col gap-6">
			{title}
			<h1 className="text-cyan text-2xl">{children}</h1>
			<img src={mobileDividerSvg} />
		</div>
	)
}

export { Advice }
