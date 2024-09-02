
import prismaClient from "../Prisma";

class ConsultMaterialModel{
    async execute(){ //Parametros passados para o execute
        console.log("Rota foi chamada")

        const material = await prismaClient.material.findMany()
        return material;
    }
}
export{ConsultMaterialModel};