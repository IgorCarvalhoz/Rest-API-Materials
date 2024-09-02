
import prismaClient from "../Prisma";

interface MaterialProps{ //Interface que faz a tratativa dos dados retornados 
    nome: string;
    descricao: string,
    preco: number;  

}

class CreateMaterialModel{
    static execute(arg0: { nome: string; descricao: string; preco: number; }) {
        throw new Error("Method not implemented.");
    }
    async execute({nome, descricao, preco}: MaterialProps){ //Parametros passados para o execute
        console.log("Rota foi chamada")

        const material = await prismaClient.material.create({
            data:{
                nome, 
                descricao, 
                preco
            }
        })
        return material;
    }
}
export{CreateMaterialModel}