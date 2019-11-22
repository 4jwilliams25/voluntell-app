const knex = require('../db/knex')

exports.getAllUsers = (req, res) => {
    knex('users')
        .then(customers => res.json(customers))
}

exports.getOneUser = (req, res) => {
    knex('users')
        .where('id', req.params.id)
        .then(customer => res.json(customer))
}

exports.addUser = (req, res) => {
    knex('users')
        .insert(req.body)
        .returning('*')
        .then(newUser => res.json(newUser))
}

exports.updateUser = (req, res) => {
    knex('users')
        .where('id', req.params.id)
        .update(req.body)
        .returning('*')
        .then(updatedUser => res.json(updatedUser))
}

exports.removeUser = (req, res) => {
    knex('users')
        .del()
        .where('id', req.params.id)
        .returning('*')
        .then(removedUser => res.json(removedUser))
}