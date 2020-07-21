import express from 'express';
import bodyParser from 'body-parser';

import path from './util/path';

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

import AdminRoutes from './routes/admin';
import ShopRoutes from './routes/shop';

import errorPage from './controllers/error';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path('')));

app.use(ShopRoutes);
app.use('/admin', AdminRoutes);

app.use(errorPage.get404);

app.listen(4000);
