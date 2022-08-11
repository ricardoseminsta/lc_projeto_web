import * as HomeController from '../controllers/homeController';
import { Router } from "express";

const router = Router();

router.get('/', HomeController.home);

router.get('/usuario/:name?', HomeController.user);
router.get('/:name/:lang', HomeController.nameLang);

export default router;