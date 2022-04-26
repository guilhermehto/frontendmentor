import styled, { css } from 'styled-components'

const Label = styled.label<LabelProps>`
	padding: 10px 24px;
	background-color: ${({ theme }) => theme.secondary};
	border-radius: 26px;
	color: ${({ theme }) => theme.white};

	& > input[type='radio']:checked {
		background-color: red;
	}

	&:hover {
		cursor: pointer;
	}
`

const RadioInput = styled.input`
	appearance: none;
	&:checked + label {
		background-color: ${({ theme }) => theme.secondaryActive};
	}
`

type RadioProps = {
	children: string
	name: string
	value: string
	checked?: boolean
	onChange?: (value: string) => void
}

type LabelProps = {
	checked?: boolean
}

const Radio: React.FC<RadioProps> = ({ children, name, value, checked = false, onChange }) => {
	return (
		<>
			<RadioInput
				type="radio"
				id={value}
				name={name}
				value={value}
				checked={checked}
				onChange={() => onChange && onChange(value)}
			/>
			<Label htmlFor={value}>{children}</Label>
		</>
	)
}

export { Radio }
