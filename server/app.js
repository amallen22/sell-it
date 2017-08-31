const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const logger = require('morgan')
const moment = require('moment')
const passport = require('./config/passport/')
const cookieParser = require('cookie-parser')

// RENDER VIEWS
const routeProducts = require(path.join(__base, '/routes/views/products'))
const routeProduct = require(path.join(__base, '/routes/views/product'))
const routeAdmin = require(path.join(__base, '/routes/views/admin'))
const routeHome = require(path.join(__base, '/routes/views/home'))
const routeLogin = require(path.join(__base, '/routes/views/login'))
const routeLogout = require(path.join(__base, '/routes/views/logout'))
const routeRegister = require(path.join(__base, '/routes/views/register'))

// AUTH VIEWS
const routesAuth = require(path.join(__base, '/routes/auth'))

// PRIVATE VIEWS
const routeUser = require(path.join(__base, '/routes/private/user'))

// API ROUTES
const routesApiProducts = require(path.join(__base, '/routes/api/products'))
const routesApiProduct = require(path.join(__base, '/routes/api/product'))
const routesApiUser = require(path.join(__base, '/routes/api/user'))

// SETTING LOCALS
app.locals.moment = moment

// CONFIG BODY-PARSER
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// SESSION
app.use(cookieParser())

app.use(passport.initialize())

// LOGGER
app.use(logger('dev'))

// CONFIG VIEWS
app.set('views', path.join(process.cwd(), './server/views'))
app.set('view engine', 'pug')

// FOLDER TO SERVE PUBLIC FILES
app.use(express.static(path.join(process.cwd(), './client')))
app.use(express.static(path.join(process.cwd(), './src')))

// ROUTES
app.use(routeProducts)
app.use(routeProduct)
app.use(routeAdmin)
app.use(routeHome)
app.use(routeLogin)
app.use(routeLogout)
app.use(routeRegister)
app.use(routesAuth)
app.use(routeUser)
app.use(routesApiProducts)
app.use(routesApiProduct)
app.use(routesApiUser)

module.exports = app
