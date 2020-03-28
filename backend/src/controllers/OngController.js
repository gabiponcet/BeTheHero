const connection = require('../database/connection');
const generatedUniqueId = require('../utils/generateUniqueId');
const id = require('crypto');

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    } ,

    async create(request, response){
        //o request passa uma requisição -> buscar um id, por ex! 
        //aí faremos: const id = request.id; (o msm serve para o body)
        const {name, email, whatsapp, city, uf} = request.body;
        const id = generatedUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.json({id});
        }
}