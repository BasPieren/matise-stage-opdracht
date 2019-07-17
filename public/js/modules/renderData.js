function hero() {
	const hero = document.getElementsByClassName("hero"),
		heroTitle = document.getElementsByClassName("hero__title"),
		heroSubTitle = document.getElementsByClassName("hero__sub-title")

	let data = localStorage.getItem("dataMatiseOpdracht"),
		dataParse = JSON.parse(data)

	hero[0].style.backgroundImage = "url(" + dataParse.articles[0].image + ")"
	heroTitle[0].textContent = dataParse.articles[0].title
	heroSubTitle[0].textContent = dataParse.articles[0].subtitle
}

function articles() {
	let data = localStorage.getItem("dataMatiseOpdracht"),
		dataParse = JSON.parse(data)

	dataParse.articles.slice(1).forEach(a => {
		const articleContainer = document.getElementsByClassName("articles"),
			article = document.createElement("article"),
			h3 = document.createElement("h3"),
			p = document.createElement("p")

		const cleanContent = /(<)([^abc][\w]*)(>)/g

		article.className = "article"
		h3.textContent = a.title
		h3.className = "article__title"
		p.textContent = a.content.replace(cleanContent, "")
		p.className = "article__copy"

		articleContainer[0].appendChild(article)
		article.appendChild(h3)
		article.appendChild(p)
	})
}

function footer() {
	const footerTitle = document.getElementsByClassName("footer__title")

	let data = localStorage.getItem("dataMatiseOpdracht"),
		dataParse = JSON.parse(data)

	footerTitle[0].textContent = dataParse.footer.text
}

export { hero, articles, footer }
