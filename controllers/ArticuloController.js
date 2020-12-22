const models = require('../models');

exports.list = async (req, res, next) => {
    try {
        const articulo = await models.Articulo.findAll();
        if (articulo) {
            res.status(200).json(articulo);
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
        const articulo = await models.Articulo.create(req.body);
        res.status(200).json(articulo);
    } catch (error) {
        res.status(500).send({
            message: 'Error->'
        })
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        const articulo = await models.Articulo.update({ codigo: req.body.codigo, nombre: req.body.nombre },
            {
                where: {
                    id: req.body.id
                },
            });
        res.status(200).json(articulo);
 
    }catch (error) {
    res.status(500).send({
        message: 'Error.'
    });
}
};

exports.activate = async (req, res, next) => {
    try {
        const articulo = await models.Articulo.update({estado: 1},
            {
                where: {
                    id: req.body.id
                },
            });
        res.status(200).json(articulo);
 
    }catch (error) {
    res.status(500).send({
        message: 'Error.'
    });
}
};

exports.deactivate = async (req, res, next) => {
    try {
        const articulo = await models.Articulo.update({estado: 0},
            {
                where: {
                    id: req.body.id
                },
            });
        res.status(200).json(articulo);
 
    }catch (error) {
    res.status(500).send({
        message: 'Error.'
    });
}
};