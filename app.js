import express from "express"
import helmet from "helmet"
const app = express()

app.use(express.static("public"))
app.use(express.json()) //parse json
app.use(helmet({contentSecurityPolicy: false,}))

/* import routers  */
import loginRouter from "./routers/login.js"

/* use routers */
app.use(loginRouter)

/* import createPage function */
import {createPage} from "./render.js"

/* ready page(s) */
const frontPage = createPage("frontpage/frontpage.html", {title: "Main page"})
const loginPage = createPage("login/login.html", {title: "Welcome"})

/* import database connection */
import connection from "./database/connectMySQL.js"

/* endpoints */
app.get("/", (req, res) => {
    res.send(frontPage)
})
app.get("/login", (req, res) => {
    res.send(loginPage)
})