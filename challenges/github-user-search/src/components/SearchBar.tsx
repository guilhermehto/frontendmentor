import styled from 'styled-components'
import { IconSearch } from './Icons/Search'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	border-radius: 16px;
	padding: 16px;
	height: 24px; // something weird happening with the icon height
	background-color: ${(props) => props.theme.foregroundColor};
`

const Input = styled.input`
	border: none;
	font-size: 13px;
	background: none;
	margin-left: 8px;
	&::placeholder {
		color: ${(props) => props.theme.textColor};
	}
`

const SearchBar = () => {
	return (
		<Wrapper>
			<IconSearch />
			<Input placeholder="Search GitHub username..." />
		</Wrapper>
	)
}

export { SearchBar }
