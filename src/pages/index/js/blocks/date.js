export function date() {
	const promotion = document.getElementById('promotion-price-up')
	const promotion_vault = document.getElementById('promotion-vault')

	let temp = 0
	setInterval(() => {
		if (temp % 2 === 0) {
			promotion_vault.innerHTML =
				'<span data-v-8aaa8106="" class="promotion">4990</span>AED'
		} else {
			promotion_vault.innerHTML =
				'<span data-v-8aaa8106="" class="promotion">1400</span>USD'
		}
		temp += 1
	}, 2000)

	const addDay = (day, month) => {
		const months = {
			1: 31,
			2: 28,
			3: 31,
			4: 30,
			5: 31,
			6: 30,
			7: 31,
			8: 31,
			9: 30,
			10: 31,
			11: 30,
			12: 31,
		}

		day += 2
		if (day > months[month]) {
			day = (months[month] - day) * -1
			month += 1
		}
		if (month < 10) {
			month = '0' + month.toString()
		}
		if (day < 10) {
			day = '0' + day.toString()
		}
		return day.toString() + '.' + month.toString()
	}

	const document_date = document.getElementById('dateNum')
	const date = new Date()
	document_date.innerHTML = addDay(date.getDate(), date.getMonth() + 1)
}
