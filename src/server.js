const express = require('express')
const corsMiddleware = require('./cors')
const routes = require('./routes')
require('./db')
require('dotenv/config')

const app = express()

app.use(express.json())
app.use(corsMiddleware)
app.use('*', corsMiddleware)

app.use((req, res, next) =>{
  console.log(`>> ${req.method} - ${req.protocol}://${req.get('host')}${req.originalUrl}`)
  next()
})

app.use(routes)

app.listen(process.env.PORT || 6666)