const route = require("express").Router();

const ecomController = require("../ControllerBankpay/ecomApi")

route.post("/signup",ecomController.signup)
route.post("/login",ecomController.login)
route.post("/allCategories",ecomController.allCategories)
route.post("/contact",ecomController.contact)
route.post("/product",ecomController.product)
route.post("/cart",ecomController.cart)

module.exports = route