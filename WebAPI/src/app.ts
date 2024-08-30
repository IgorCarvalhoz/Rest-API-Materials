import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import router from './routes/routes';

const app = express(); //iniciando express
app.use(morgan('tiny'));
app.use(cors());
app.use(helmet()); 
app.use(express.json());

app.use(router) //Iniciando o router, todas as rotas virão da pasta Routes/routes.ts
 
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message); //Tratamento de erros padrão
})
 
export default app;