import diceSvg from '../../assets/icon-dice.svg'

const AdviceButton: React.FC = () => {
	return (
		<button className="relative top-7 rounded-full bg-green h-16 w-16 self-center flex justify-center items-center">
			<img src={diceSvg} alt="dice with number 5 facing up" />
		</button>
	)
}

export { AdviceButton }
