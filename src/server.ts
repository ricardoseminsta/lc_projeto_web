import express from 'express';
import mainRoutes from './routes/index';
import path from "path";


const server = express();

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));
server.use('/static', express.static(path.join(__dirname, '../public')));

server.use(mainRoutes)
server.listen(4000)