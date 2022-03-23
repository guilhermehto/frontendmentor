const getRandomSlip = async () => {
	const response = await fetch('https://api.adviceslip.com/advice')
	const data = await response.json()
	return data.slip
}

export const advicesClient = {
	getRandomSlip,
}
