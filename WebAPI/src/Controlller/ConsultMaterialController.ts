import { ConsultMaterialModel } from "../Models/ConsultMaterialModel";
import { Request, Response } from "express";

class ConsultMaterialController{
    async handle(req: Request, res: Response){
        const consultMaterial = new ConsultMaterialModel()

        const material = await consultMaterial.execute();
        res.send(material)
    }
}
export{ConsultMaterialController}   