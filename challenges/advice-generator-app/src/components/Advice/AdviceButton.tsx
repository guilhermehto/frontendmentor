import diceSvg from '../../assets/icon-dice.svg'

type AdviceButtonProps = {
	onClick: () => void
}

const AdviceButton: React.FC<AdviceButtonProps> = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			className="relative top-7 rounded-full bg-green h-16 w-16 self-center flex justify-center items-center active:shadow-neon"
		>
			<img src={diceSvg} alt="dice with number 5 facing up" />
		</button>
	)
}

export { AdviceButton }
