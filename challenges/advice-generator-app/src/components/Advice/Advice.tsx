import { ReactNode } from 'react'

type AdviceProps = {
	title: ReactNode
}

const Advice: React.FC<AdviceProps> = ({ children, title }) => {
	return (
		<div className="bg-dark-gray-blue rounded-xl px-6 py-10 text-center">
			{title}
			{children}
		</div>
	)
}

export { Advice }
