export const isName = (name: string) => {
	const nameRule = /^[a-zA-Zа-яА-Я'‘’`‛ʼ‛-]+(\s[a-zA-Zа-яА-Я'‘’`‛ʼ‛-]+)*$/
	if (nameRule.test(name)) {
		return true
	}
	return false
}

export const isEmail = (email: string) => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
	if (emailRegex.test(email)) {
		return true
	}
	return false
}

export const isPass = (pass: string) => {
	if (pass.length > 7) {
		return true
	}
	return false
}
