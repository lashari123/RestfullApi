import express  from 'express'
import podyParser from'body-parser'
import {createUser,getUsers,getUser,deleteUser,updateUser} from '../controllers/users.js'


const router= express.Router();
const app =express();
app.use(podyParser.json());

let users=[
    {
name:"danyal"
    }
]

router.get('/',getUsers);

router.post('/',createUser);
router.get('/:id',getUser);

router.delete('/:id', deleteUser);
router.patch('/:id',updateUser)
export default router;