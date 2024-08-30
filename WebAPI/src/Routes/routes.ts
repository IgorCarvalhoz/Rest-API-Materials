import { CreateMaterialController } from "../Controlller/CreateMaterialController";
import { Express } from "express";
import { Router, Request, Response } from "express";
const router = Router();
const bodyParser = require('body-parser'); //instanciando bodyparser (caminhos)
const express = require('express'); //instanciando express

const app = express(); //Iniciando express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', async (req: Request, res: Response) => {
    res.send('Ta rodando');
});
router.get('/testando', async (req: Request, res: Response) => {
    res.send('Testando nova rota');
});

export default router;