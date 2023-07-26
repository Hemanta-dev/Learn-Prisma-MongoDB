const express= require('express');
const app =express();

const PORT =9000;

app.use(express.json());

//router connection
app.use(require('./router/auth'));

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})