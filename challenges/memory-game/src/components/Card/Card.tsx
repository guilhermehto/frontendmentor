import styled from 'styled-components'

const Wrapper = styled.div`
	padding: 24px;
	background-color: ${({ theme }) => theme.white};
	display: flex;
	flex-direction: column;
`

const Card: React.FC = ({ children }) => {
	return <Wrapper>{children}</Wrapper>
}

export { Card }
