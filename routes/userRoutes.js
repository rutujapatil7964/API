import express, { Router } from 'express'
const router = express.Router();
import UserController from '../controllers/usercontroller.js';
import authmiddleware from '../middleware/authmiddleware.js'
import checkUserAuth from '../middleware/authmiddleware.js';
// import {login} from '../controllers/usercontroller.js';


//Public route
router.post('/register', UserController.userRegistration)
router.post('/login', UserController.userLogin)
router.post('/send-reset-password-email', UserController.sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token', UserController.userPasswordReset)

//Route level middleware - to protect route
router.use('/changepassword', checkUserAuth)
router.use('/loggeduser', checkUserAuth)

//Protected route
router.post('/changePassword',UserController.changeUserPassword)
router.get('/loggeduser',UserController.loggedUser)



export default router