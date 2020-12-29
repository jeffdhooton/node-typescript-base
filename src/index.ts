/** External Dependencies */
import express, { Request, Response } from 'express';

/** Internal Dependencies */
import router from './router';

/** Constants */
const PORT = process.env.PORT || 8080;

/** Create Express application */
const app = express();

/** Server setup: routes, middleware, etc */
app.use(router);

/** Start server on given port */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
