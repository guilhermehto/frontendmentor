import React, { MouseEventHandler } from 'react'

type ButtonProps = {
	children: string
	onClick?: MouseEventHandler
}
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="grow py-3 rounded-full text-center text-sm tracking-widest hover:bg-white hover:text-orange text-white bg-orange"
		>
			{children}
		</button>
	)
}

export { Button }
