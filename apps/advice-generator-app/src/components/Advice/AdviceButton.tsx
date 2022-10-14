import diceSvg from '../../assets/icon-dice.svg'

type AdviceButtonProps = {
	onClick: () => void
	className?: string
}

const AdviceButton: React.FC<AdviceButtonProps> = ({ onClick, className }) => {
	const classes = `${className} rounded-full bg-green h-16 w-16 flex justify-center items-center active:shadow-neon`
	return (
		<button onClick={onClick} className={classes}>
			<img src={diceSvg} alt="dice with number 5 facing up" />
		</button>
	)
}

export { AdviceButton }
