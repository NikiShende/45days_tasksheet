const express=require('express');

const app=express();
const hello=require('./index')



app.use(express.json());



//basic routing
app.get('./index',(req,res)=>{
    res.send("hello to all " );
});


//parameter routing

// app.get('/index/:userid:',(req,res)=>{
//     res.send(`userid:${req.params.userid}`)
// })
const port=3000;


app.listen(port,()=>{
     console.log(`Server running on http://localhost:${port}`);
})