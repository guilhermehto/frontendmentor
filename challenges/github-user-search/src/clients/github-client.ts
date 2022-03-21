import { format } from 'date-fns'

const BASE_URL = 'https://api.github.com/'
const USERS_PATH = 'users/'

const getUser = async (username: string) => {
	const response = await fetch(`${BASE_URL}${USERS_PATH}${username}`)
	const user = await response.json()

	if (!!user.message) {
		return null
	}
	return {
		...user,
		avatarUrl: user.avatar_url,
		repos: user.public_repos,
		joinedAt: format(new Date(user.created_at), 'dd MMM yyyy'),
	}
}

export const githubClient = {
	getUser,
}
