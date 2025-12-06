import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './config/databaseConnect.js';
import cancionRouter from './rutas/cancion.route.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT2 || 8080;

// MIDDLEWARES
app.use(express.json());

connectToDb();
app.use('/api/canciones', cancionRouter); 


app.listen(PORT,()=>{
    console.log(`El server corre en puerto ${PORT}`)
})