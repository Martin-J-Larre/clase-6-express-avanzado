let express = require('express');
const app = express();
let cors = require('cors');
const PORT = 3000;
const frase = "Hola mundo como estas?";

let login = (req, res, next) => {
    console.log("Ve, estas conectado");
    next();
}

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/frase", login, (req, res, next) =>{
    res.send(frase);
});

app.get("/frase/login", login, (req, res, next) =>{
    res.send("Estas logueado");
});

app.get("/letras/:num([0-9]+)", login, (req, res, next) =>{
    let arr = frase.split("");
    res.send(arr[(req.params.num - 1)]);
});

app.get("/palabras/:num", login, (req, res, next) =>{
    let {num} = req.params;
    let arr = frase.split(" ");
    if (num > arr.length) {
        res.send("El parametro esta fuera del rango")
    }else{
        res.send(arr[(num - 1)]);
    }
});


app.listen(PORT,()=>{
    console.log("Conectado al servidor, puerto",PORT);
}); 


