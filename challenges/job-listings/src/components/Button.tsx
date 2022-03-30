type ButtonProps = {
	onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className="border-none bg-none text-dark-cyan font-bold text-xs">
			{children}
		</button>
	)
}

export { Button }
