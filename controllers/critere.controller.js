const Critere = require('../models').Critere;
const Demeure = require('../models').Demeure;

exports.critere_list = (req, res, next) => {
    Critere.findAll({
        attributes: ['id', 'name'],
        include: [
            {
                model: Demeure,
                attributes: ['id', 'title', 'price', 'city', 'description'],
                through: {attributes: []}
            }
        ]
    })
        .then(critere => res.status(200).json(critere))
        .catch(err => console.log(err))
}

exports.critere_add = (req, res, next) => {
    const critere = req.body;
    Critere.create(critere)
        .then(critereCreated => {
            critereCreated.setDemeures(req.body.Demeures)
                .then(critereCreated => res.status(201).json(critereCreated))
                .catch(err => console.log(err))

        })
        .catch(err => console.log(err))
}

exports.critere_detail = (req, res, next) => {
    const id = req.params.id;
    // Singer.findOne({
    //   where: {
    //     id: id
    //   }
    // })
    Critere.findByPk(id)
        .then(critere => res.status(200).json(critere))
        .catch(err => console.log(err))
}

exports.critere_edit = (req, res, next) => {
    const id = req.params.id;
    const critere = req.body;
    Critere.update(critere, {
        where: {
            id: id
        }
    })
        .then(() => {
            res.status(200).json({message: 'Critere updated'})
        })
        .catch(err => console.log(err))
}

exports.critere_delete = (req, res, next) => {
    const id = req.params.id;
    Critere.destroy({
        where: {
            id: id
        }
    })
        .then(critere => res.status(200).json({message: 'Critere deleted'}))
        .catch(err => console.log(err))
}
