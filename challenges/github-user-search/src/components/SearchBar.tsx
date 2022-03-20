import styled from 'styled-components'

import { Button } from './Button'
import { IconSearch } from './Icons/Search'

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	border-radius: 16px;
	padding: 8px 8px 8px 16px;
	min-height: 24px; // something weird happening with the icon height
	background-color: ${(props) => props.theme.foregroundColor};
	justify-content: space-between;
	box-shadow: ${(props) => props.theme.shadow};

	& svg {
		fill: ${(props) => props.theme.primary};
	}
`

const Input = styled.input`
	border: none;
	font-size: 13px;
	background: none;
	text-overflow: ellipsis;
	flex-grow: 1;
	margin-left: 8px;
	caret-color: ${(props) => props.theme.primary};

	&::placeholder {
		color: ${(props) => props.theme.textColor};
	}

	@media screen and (min-width: ${(props) => props.theme.tabletBreakPoint}px) {
		font-size: 18px;
	}
`

const SearchBar = () => {
	return (
		<Wrapper>
			<IconSearch />
			<Input placeholder="Search GitHub username&#8230;" />
			<Button>Search</Button>
		</Wrapper>
	)
}

export { SearchBar }
