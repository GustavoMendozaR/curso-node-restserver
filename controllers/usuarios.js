const { response, request } =require('express');


const usuariosGet = (req = request, res = response) => {

    const { id = null, name = null, apikey = null, page = 1, limit = 10} = req.query;


    res.json({
        msg: 'get API - controlador',
        id,
        name,
        apikey,
        page,
        limit
    });
}


const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}


const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}


const usuariosPatch = (req, res = response) => {

    res.json({
        msg: 'patch API - controlador'
    });
}

const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'delete API - controlador'
    });
}



module.exports = { 
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}