import express from 'express';
const app = express();
import usersRouter from './routes/usersRouter.js';
import todosRouter from './routes/todosRouter.js';

import { logger } from './middleware/logger.js';
import { notFound, errorHandler } from './middleware/errorHandlers.js';

app.listen(3000, () => {});

app.use(express.json());
app.use(logger);

app.use('/users', usersRouter);
app.use('/todos', todosRouter);

app.use(notFound);
app.use(errorHandler);


export default app;
