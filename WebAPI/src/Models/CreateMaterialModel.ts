
import prismaClient from "../Prisma";

interface MaterialProps{ //Interface que faz a tratativa dos dados retornados 
    nome: string;
    descricao: string,
    preco: number;  

}

class CreateMaterialModel{
    async execute({nome, descricao, preco}: MaterialProps){ //Parametros passados para o execute
        console.log("Rota foi chamada")

        const costumer = await prismaClient.material.create({
            data:{
                nome, descricao, preco
            }
        })
        return costumer;
    }
}
export{CreateMaterialModel}