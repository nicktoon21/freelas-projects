import { Request, Response } from 'express';
import connection from "../database/connection";

const ProjectController = {

    async index(request: Request, response: Response){
        const {page = 1} = request.query;

        const [projects] = await connection('project')
        .join('company', 'company.id', '=', 'project.company_id' )
        .select(
            'project.*',
            'company.*'
        );

        return response.json(projects);
    },

    async create(request: Request, response: Response){
        const { title, description, value } = request.body;
        const company_id = request.headers.authorization;

        const [id] = await connection('project').insert({
            title,
            description,
            value,
            company_id,
        });

        return response.json({ id });
    }
};

export default ProjectController;