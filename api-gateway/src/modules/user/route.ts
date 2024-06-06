import express,{Application} from 'express'
import userController from './controller';
import { isValidated } from '../auth/controller';

const userRoute:Application = express();

const controller = new userController();


userRoute.post('/register', controller.register)
userRoute.post('/login', controller.login)
userRoute.patch('/update-user', isValidated, controller.updateUserInfo)
userRoute.delete('/delete-user', isValidated, controller.deleteUser)
userRoute.get('/get-user', isValidated, controller.getUser)
userRoute.get('/list-users', isValidated, controller.listUsers)
userRoute.post('/follow-user', isValidated, controller.followUser)
userRoute.post('/unfollow-user', isValidated, controller.unFollowUser)




export default userRoute