export const maxForQuantityAndType = (origin, quantity, type) => {
	let newArray = [...origin]
	const originLength = newArray.length

	for (let i = 0; i < originLength - 1; i++) {
		for (let j = i + 1; j <= originLength - 1; j++) {
			if (newArray[i][type] < newArray[j][type]) {
				let temp = newArray[i]
				newArray[i] = newArray[j]
				newArray[j] = temp
			}
		}
	}
	return newArray.filter((item, index) => index < quantity)
}
export const sortMinToMax = (originArray, field) => {
	let newArray = [...originArray]
	const originLength = newArray.length
	for (let i = 0; i < originLength - 1; i++) {
		for (let j = i + 1; j <= originLength - 1; j++) {
			if (newArray[i][field] > newArray[j][field]) {
				let temp = newArray[i]
				newArray[i] = newArray[j]
				newArray[j] = temp
			}
		}
	}
	return newArray
}
