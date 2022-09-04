import React from 'react'

type RadioProps = {
	children: string
	name: string
	value: string
	checked?: boolean
	onChange?: (value: string) => void
}

const Radio: React.FC<RadioProps> = ({ children, name, value, checked = false, onChange }) => {
	return (
		<div className="flex">
			<input
				className="appearance-none peer"
				type="radio"
				id={`${value}-${name}`}
				name={name}
				value={value}
				checked={checked}
				onChange={() => onChange && onChange(value)}
			/>
			<label
				className="flex justify-center p-3 h-11 w-11 md:h-12 md:w-12 rounded-full text-medium-gray text-center bg-dark-blue peer-checked:text-white peer-checked:bg-light-gray hover:cursor-pointer hover:bg-orange"
				htmlFor={`${value}-${name}`}
			>
				{children}
			</label>
		</div>
	)
}

export { Radio }
