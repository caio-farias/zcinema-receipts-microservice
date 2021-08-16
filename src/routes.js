const express = require('express')
const UserController = require('./controllers/UserController')
const ReceiptController = require('./controllers/ReceiptController')
const routes = express.Router()

routes.post('/receipts/users', UserController.createUser)
routes.patch('/receipts/users/:id', UserController.updateUser)
routes.delete('/receipts/users/:id', UserController.deleteUser)

routes.post('/receipts/:user_id', ReceiptController.createReceipt)
routes.get('/receipts/:user_id', ReceiptController.getUserReceipts)

module.exports = routes
