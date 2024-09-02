import { CreateMaterialController } from "../Controlller/CreateMaterialController";
import { ConsultMaterialController } from "../Controlller/ConsultMaterialController";
import { Express } from "express";
import { Router, Request, Response } from "express";
const router = Router();
const bodyParser = require('body-parser'); //instanciando bodyparser (caminhos)
const express = require('express'); //instanciando express

const app = express(); //Iniciando express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', async ( res: Response) => {
    res.send( {ok:true})
});
router.post('/add', async (req: Request, res: Response) => {
    return new CreateMaterialController().handle(req, res);
});
router.get('/consult', async (req: Request, res: Response) => {
    return new ConsultMaterialController(). handle(req, res);
});


export default router;