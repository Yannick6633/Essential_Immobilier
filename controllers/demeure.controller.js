const Demeure = require('../models').Demeure;

exports.demeure_list = (req, res, next) => {
    Demeure.findAll({})
        .then(demeures => res.status(200).json(demeures))
        .catch(err => console.log(err))
}

exports.demeure_add = (req, res, next) => {
    const demeure = req.body;
    Demeure.create(demeure)
        .then(demeureCreated => {
            res.status(201).json(demeureCreated)
        })
        .catch(err => console.log(err))
}

exports.demeure_detail = (req, res, next) => {
    const id = req.params.id;
    // Style.findOne({
    //   where: {
    //     id: id
    //   }
    // })
    Demeure.findByPk(id)
        .then(demeure => res.status(200).json(demeure))
        .catch(err => console.log(err))
}

exports.demeure_edit = (req, res, next) => {
    const id = req.params.id;
    const demeure = req.body;
    Demeure.update(demeure, {
        where: {
            id: id
        }
    })
        .then(() => {
            res.status(200).json({message: 'Demeure updated'})
        })
        .catch(err => console.log(err))
}

exports.demeure_delete = (req, res, next) => {
    const id = req.params.id;
    Demeure.destroy({
        where: {
            id: id
        }
    })
        .then(demeure => res.status(200).json({message: 'Demeure deleted'}))
        .catch(err => console.log(err))
}
