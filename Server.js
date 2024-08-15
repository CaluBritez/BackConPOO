import express from "express";
import cors from 'cors'
import morgan from "morgan";
import { environments } from './src/config/environments.js'
//import productRoutes from '../routes/productos.routes.js'
import {startDb} from "./src/db/connection.js";

class Server {

    constructor() {
        this.app = express();
        this.port = environments.PORT;

        this.dbConnect();

        this.middlewares();
        this.routes();
    }
    
    async dbConnect(){
        await startDb()
    }
    

    middlewares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api', (req, res) => res.send('Hello World'))
    }

    listen(){
        this.app.listen(this.port, () => console.log(`Server on http://127.0.0.1:${this.port}`))
    }
}

export default Server;