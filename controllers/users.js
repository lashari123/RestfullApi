
import { v4 as uuidv4}  from 'uuid'

var users=[
    {
        name:"dk"
    }
]
export const getUsers=(req,res)=>{
    res.send(users);
}

export const createUser =(req,res)=>{
    const user=req.body

    users.push({...user ,id: uuidv4()});
    console.log(req.body);
    
    res.send(`user has created succesfully ${user.username}`)
    

}
 export const getUser=(req,res)=>{
    

    
    const {id}=req.params
  
   const findUser= users.find(user => user.id ===id);
   res.send(findUser);
   
}

export const deleteUser=(req,res)=>{
    const {id}=req.params

    users=users.filter(user=> user.id !==id)
    res.send(`user with that id ${id} hss successfully deleted`)
}
export const updateUser=(req,res)=>{
    const {id}=req.params
 const {username,useremail,age}=req.body
const getUserById=users.find(user=> user.id === id)

if(username) getUserById.username=username;



if(useremail) getUserById.useremail=useremail;

if(useremail) getUserById.age=age;

res.send(`user with id:${id} is successfully modified`)
}

