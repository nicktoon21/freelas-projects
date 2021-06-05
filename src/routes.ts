import { Router } from "express";

import CompanyController from './controller/CompanyController';
import ProjectController from './controller/ProjectController';

const router = Router();

router.get('/companies', CompanyController.index); //Listagem
router.post('/companies', CompanyController.create); //Criar

router.get('/projects', ProjectController.index); //Listagem
router.post('/projects', ProjectController.create); //Criar

export default router;