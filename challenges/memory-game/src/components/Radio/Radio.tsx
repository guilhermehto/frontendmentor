import styled from 'styled-components'

const Label = styled.label`
	display: flex;
	flex-grow: 1;
	justify-content: center;
	padding: 10px 24px;
	background-color: ${({ theme }) => theme.secondary};
	border-radius: 26px;
	color: ${({ theme }) => theme.white};
	text-align: center;

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

const RadioWrapper = styled.div`
	display: flex;
`

type RadioProps = {
	children: string
	name: string
	value: string
	checked?: boolean
	onChange?: (value: string) => void
}

const Radio: React.FC<RadioProps> = ({ children, name, value, checked = false, onChange }) => {
	return (
		<RadioWrapper>
			<RadioInput
				type="radio"
				id={`${value}-${name}`}
				name={name}
				value={value}
				checked={checked}
				onChange={() => onChange && onChange(value)}
			/>
			<Label htmlFor={`${value}-${name}`}>{children}</Label>
		</RadioWrapper>
	)
}

export { Radio }
