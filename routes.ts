import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();
import { getCaseItems, addCaseItem, getCaseItem, updateCaseItem, deleteCaseItem } from './controller.ts';

router
.get('/cases', getCaseItems)
.post('/cases', addCaseItem)
.get('/cases/:id', getCaseItem)
.put('/cases/:id', updateCaseItem)
.delete('/cases/:id', deleteCaseItem);

export default router