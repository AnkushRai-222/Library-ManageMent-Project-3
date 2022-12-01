const express = require('express')
const router = express.Router();

const userController = require('../controller/userController')
const bookController = require('../controller/bookController')
const reviewController = require('../controller/reviewController')
const middleWare = require('../middleware/auth')

//.............User...................
router.post('/register',userController.createUser)
router.post('/login',userController.login)

//............books......................
router.post('/books',middleWare.authenticate,bookController.createBook)
router.get('/books',middleWare.authenticate,bookController.getBooks)
router.get('/books/:bookId',middleWare.authenticate,bookController.getBookByParams)
router.put('/books/:bookId',middleWare.authenticate,bookController.updateBooks)
router.delete('/books/:bookId',middleWare.authenticate,bookController.deleteBooks)
//................review..................
router.post('/books/:bookId/review',reviewController.createReview)
router.put('/books/:bookId/review/:reviewId',bookController.updateBooks)
router.delete('/books/:bookId/review/:reviewId',bookController.deleteBooks)






router.all('/*',function(req,res){
    return res.status(400).send({status:false,message:"invalid http request"})
})
module.exports = router
