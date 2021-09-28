const express = require ('express');
const app = express ();
const path = require ('path');

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req,res)=>{
    res.sendFile (path.resolve(__dirname,'./views/home.html'));
})

app.get('/register', (req,res)=>{
    res.sendFile (path.resolve(__dirname,'./views/register.html'));
})

app.get('/login', (req,res)=>{
    res.sendFile (path.resolve(__dirname,'./views/login.html'));
})

app.post('/register', (req,res)=>{
    res.sendFile (path.resolve(__dirname,'./views/home.html'));
})

app.post('/login', (req,res)=>{
    res.sendFile (path.resolve(__dirname,'./views/home.html'));
})

app.listen (process.env.PORT || 3000 , ()=>{
    console.log ('Server corriendo en el puerto 3000');
});


