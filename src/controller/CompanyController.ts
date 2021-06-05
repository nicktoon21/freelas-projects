import { Request, Response } from 'express';
import connection from "../database/connection";
import crypto from 'crypto';

const CompanyController = {
    async index(request: Request, response: Response){
        const companies = await connection('company').select('*');

        return response.json(companies);
    },

    async create(request: Request, response: Response){
        const {name , mail, whatsapp, requester} = request.body;

        const id = crypto.randomBytes(4).toString('hex');

        await connection('company').insert({
            id,
            name,
            mail,
            whatsapp,
            requester
        });

        return response.json({ id });
    }
}

export default CompanyController;