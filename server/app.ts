import express from 'express';
import bodyParser from 'body-parser';

import path from './util/path';

import sequelize from './util/database';

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

import AdminRoutes from './routes/admin';
import ShopRoutes from './routes/shop';

import errorPage from './controllers/error';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path('public')));

app.use(ShopRoutes);
app.use('/admin', AdminRoutes);

app.use(errorPage.get404);

sequelize
    .sync()
    .then(result => {
        console.log('running sucessfully!');
        app.listen(4000);
    })
    .catch(error => {
        console.error(error);
    });
