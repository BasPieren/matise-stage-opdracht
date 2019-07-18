"use strict"

import { getData } from "./modules/fetch.js"
import * as template from "./modules/renderData.js"

getData("https://stage.matise.nl/api/")
template.hero()
template.articles()
template.footer()
