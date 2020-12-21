const models = require('../models');
const db = require('../models');

exports.list = async (req, res, next) => {
    try {
        const categoria = await db.Categoria.findAll();
        if (categoria) {
            res.status(200).json(categoria);
        } else {
            res.status(404).send({
                message: 'No hay categorias registradas'
            })
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error!!'
        })
        next(error);
    }
};

exports.add = async (req, res, next) => {
    try {
        const categoria = await db.Categoria.create(req.body);
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).send({
            message: 'Error->'
        })
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        const categoria = await db.Categoria.update({ nombre: req.body.nombre, descripcion: req.body.descripcion },
            {
                where: {
                    id: req.body.id
                },
            });
        res.status(200).json(categoria);
 
    }catch (error) {
    res.status(500).send({
        message: 'Error.'
    });
}
};

exports.activate = async (req, res, next) => {
    try {
        const categoria = await db.Categoria.update({estado: 1},
            {
                where: {
                    id: req.body.id
                },
            });
        res.status(200).json(categoria);
 
    }catch (error) {
    res.status(500).send({
        message: 'Error.'
    });
}
};

exports.deactivate = async (req, res, next) => {
    try {
        const categoria = await db.Categoria.update({estado: 0},
            {
                where: {
                    id: req.body.id
                },
            });
        res.status(200).json(categoria);
 
    }catch (error) {
    res.status(500).send({
        message: 'Error.'
    });
}
};