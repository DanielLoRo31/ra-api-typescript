import { Router } from 'express';
import MembersController from "../controllers/membersController";


const router = Router();
const members = new MembersController();

//get sin importar el método del controllador

router.get('/',members.get);





export default router;