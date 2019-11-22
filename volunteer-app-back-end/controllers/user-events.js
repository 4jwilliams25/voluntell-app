const knex = require('../db/knex')

exports.getAllUserEvents = (req, res) => {
    knex('user-events')
        .then(userEvents => res.json(userEvents))
}

exports.getOneUserEvent = (req, res) => {
    knex('user-events')
        .where('id', req.params.id)
        .then(userEvent => res.json(userEvent))
}

exports.addUserEvent = (req, res) => {
    knex('user-events')
        .insert(req.body)
        .returning('*')
        .then(newUserEvent => res.json(newUserEvent))
}

exports.removeUserEvent = (req, res) => {
    knex('user-events')
        .del()
        .where('id', req.params.id)
        .returning('*')
        .then(removedUserEvent => res.json(removedUserEvent))
}