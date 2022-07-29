import express, { Request, Response } from 'express';
import mainRoutes from './routes/index'


const server = express();

server.use(mainRoutes)
server.listen(4000)