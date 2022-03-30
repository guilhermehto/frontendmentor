type ButtonProps = {
	onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="border-none bg-none text-dark-cyan font-bold text-xs active:underline active:text-desaturated-cyan"
		>
			{children}
		</button>
	)
}

export { Button }
