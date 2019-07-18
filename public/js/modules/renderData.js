function hero() {
	const heroBg = document.getElementsByClassName("hero__background"),
		heroTitle = document.getElementsByClassName("hero__title"),
		heroSubTitle = document.getElementsByClassName("hero__sub-title")

	let data = localStorage.getItem("dataMatiseOpdracht"),
		dataParse = JSON.parse(data)

	heroBg[0].style.backgroundImage = "url(" + dataParse.articles[0].image + ")"
	heroTitle[0].textContent = dataParse.articles[0].title
	heroSubTitle[0].textContent = dataParse.articles[0].subtitle
}

function articles() {
	let data = localStorage.getItem("dataMatiseOpdracht"),
		dataParse = JSON.parse(data)

	dataParse.articles.slice(1).forEach(a => {
		const articleContainer = document.getElementsByClassName("articles"),
			article = document.createElement("article"),
			articleCon = document.createElement("div"),
			copyCon = document.createElement("div"),
			img = document.createElement("div"),
			h3 = document.createElement("h3"),
			h4 = document.createElement("h4"),
			p = document.createElement("p")

		const cleanContent = /(<)([^abc][\w]*)(>)/g

		article.className = "article"
		img.className = "article__img"
		articleCon.className = "article__container"
		copyCon.className = "article__copy-container"
		h3.textContent = a.title
		h3.className = "article__title"
		h4.textContent = a.title
		h4.className = "article__sub-title"
		p.textContent = a.content.replace(cleanContent, "")
		p.className = "article__copy"

		articleContainer[0].appendChild(article)
		article.appendChild(articleCon)
		articleCon.appendChild(img)
		articleCon.appendChild(copyCon)
		copyCon.appendChild(h3)
		copyCon.appendChild(h4)
		copyCon.appendChild(p)
	})
}

function footer() {
	const footerTitle = document.getElementsByClassName("footer__title")

	let data = localStorage.getItem("dataMatiseOpdracht"),
		dataParse = JSON.parse(data)

	footerTitle[0].textContent = dataParse.footer.text
}

export { hero, articles, footer }
