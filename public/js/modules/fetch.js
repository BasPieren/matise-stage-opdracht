import { saveLocalStorage } from "./localStorage.js"

function getData() {
	const url = "https://stage.matise.nl/api/"

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
