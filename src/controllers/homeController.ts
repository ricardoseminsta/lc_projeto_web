import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {

    res.render('pages/index')
}

export const nameLang = (req: Request, res: Response) => {
    let name = req.params.name;
    let lang = req.params.lang;
    let showMessage = true;
    
    var produtos = [
        {name: "Doritos", price: 6},
        {name: "Coca-Cola", price: 9.4},
        {name: "Mentos", price: 2.8},
        {name: "paçoca", price: .5},
        {name: "Picolé", price: 2},
    ];

    res.render('pages/produtos', {
        name,
        lang,
        showMessage,
        produtos
    });
}

export const user =  (req: Request, res: Response) => {
    let name = req.params.name
    if(name){
        res.send(`Oi usuario ${name}`);
    } else {
        res.send('Ola usuario');
    }
}