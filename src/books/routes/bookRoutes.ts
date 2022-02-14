import {Router} from 'express';
import {addNewBook,getBooks,getBookById, updateBook,deleteBook } from '../controllers/bookController';
import { bookValidationMiddleware } from '../middlewares/requestValidation';

const router = Router();

router.get('/books',getBooks);
router.get('/books/:id',getBookById);
router.post('/books', bookValidationMiddleware, addNewBook);

router.put('/books/:id',updateBook);

router.delete('/books/:id',deleteBook);

export default router;
