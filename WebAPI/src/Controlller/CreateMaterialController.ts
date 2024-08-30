import { CreateMaterialModel } from "../Models/CreateMaterialModel";
import { Request, Response } from "express";

class CreateMaterialController{
    async handle(req: Request, res: Response){
        const {nome, descricao, preco} = req.body as {nome: string, descricao: string, preco: number};
        const material = await new CreateMaterialModel().execute({nome, descricao, preco})

        res.send(material)
    }
}
export{CreateMaterialController}   