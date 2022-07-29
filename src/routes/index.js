import { Router } from "express";

const router = Router();

router.get('/', (req, res) => res.render('index', {
	title: 'FADE'
}));

router.get('/flip', (req, res) => res.render('flip', {
	title: 'FLIP'
}));

router.get('/zoom', (req, res) => res.render('zoom', {
	title: 'ZOOM'
}));

export default router;