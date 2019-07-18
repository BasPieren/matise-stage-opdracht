import { saveLocalStorage } from "./localStorage.js"

function getData(link) {
	const url = link

	fetch(url)
		.then(res => {
			return res.json()
		})
		.then(data => {
			saveLocalStorage("dataMatiseOpdracht", data)
		})
		.catch(error => console.error(error))
}

export { getData }
