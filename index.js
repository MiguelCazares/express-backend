const express = require('express');
const routerApi = require('./src/routes/index');
const { errorHandler, logErrors } = require('./src/middlewares/errorHandler');

const app = express();
const port = 3000;
const middlewares = [logErrors, errorHandler];

routerApi(app);

app.use(middlewares);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


