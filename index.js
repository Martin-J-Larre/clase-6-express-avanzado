let express = require('express');
const app = express();
let cors = require('cors');
const PORT = 3000;
const frase = "Hola mundo como estas?";

// let login = (req, res, next) => {
//     console.log("Ve, estas conectado");
//     next();
// }

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// app.get("/frase", login, (req, res, next) =>{
//     res.send(frase);
// });

// app.get("/frase/login", login, (req, res, next) =>{
//     res.send("Estas logueado");
// });

// app.get("/letras/:num([0-9]+)", login, (req, res, next) =>{
//     let arr = frase.split("");
//     res.send(arr[(req.params.num - 1)]);
// });

// app.get("/palabras/:num", login, (req, res, next) =>{
//     let {num} = req.params;
//     let arr = frase.split(" ");
//     if (num > arr.length) {
//         res.send("El parametro esta fuera del rango")
//     }else{
//         res.send(arr[(num - 1)]);
//     }
// });


// app.listen(PORT,()=>{
//     console.log("Conectado al servidor, puerto",PORT);
// }); 

//* Ejercicio 2


//Routes Sumas
app.get("/suma/:a/:b",(req, res, next) =>{
    let {a,b} = req.params;
    res.send(`Resultado: ${parseInt(a) + parseInt(b)}`);
});

app.get("/suma",(req, res, next) =>{
    let {a,b} = req.query;
    res.send(`Resultado: ${parseInt(a) + parseInt(b)}`);
});

app.get("/suma/:op",(req, res, next) =>{
    let {op} = req.params;
    let arr_num = op.split("+");
    let suma = parseInt(arr_num[0]) + parseInt(arr_num[1]);
    res.send(`Respuesta desde ${suma}`);
});

//Testing verbos

app.get("/testing",(req, res, next) =>{
    res.send(`Respuesta desde ${req.method}`);
});

app.post("/testing",(req, res, next) =>{
    res.send(`Respuesta desde ${req.method}`);
});

app.delete("/testing",(req, res, next) =>{
    res.send(`Respuesta desde ${req.method}`);
});

app.put("/testing",(req, res, next) =>{
    res.send(`Respuesta desde ${req.method}`);
});

// Último ejercicio
let frutas = ["Manzana","Melon", "Piña", "Fresa", "Sandia"];

app.put("/frutas",(req, res, next) =>{
    res.send(`Respuesta desde ${req.method}`);
});

app.post("/frutas",(req, res, next) =>{
    res.send(`Respuesta desde ${req.method}`);
});



app.listen(PORT,()=>{
    console.log("Conectado al servidor, puerto",PORT);
}); 



