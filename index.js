import express  from 'express'
import bodyparser from 'body-parser'
import userRoutes from './routes/users.js'

const app=express();

const PORT=5000;

app.use(bodyparser.json());
app.use('/users',userRoutes)

app.get('/', (req,res)=>{
    console.log('hello baby');
    res.send("hello babe");
})

app.listen(5000,()=> console.log(`server is running on http://localhost${PORT}`));