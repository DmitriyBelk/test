export 	function generatePassword(len: number) {
	const length = len,
		charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	let res = ''
	for (let i = 0, n = charset.length; i < length; ++i) {
		res += charset.charAt(Math.floor(Math.random() * n))
	}
	return res
}