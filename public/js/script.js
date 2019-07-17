"use strict"

import { getData } from "./modules/fetch.js"
import * as template from "./modules/renderData.js"

getData()
template.hero()
template.articles()
template.footer()
