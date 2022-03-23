type AdviceTitleProps = {
	children: string
}

const AdviceTitle: React.FC<AdviceTitleProps> = ({ children }) => {
	return <h2 className="text-green text-tiny uppercase tracking-widest">{children}</h2>
}

export { AdviceTitle }
