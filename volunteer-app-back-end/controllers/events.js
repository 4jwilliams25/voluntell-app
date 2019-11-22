const knex = require('../db/knex')

exports.getAllEvents = (req, res) => {
    knex('events')
        .then(events => res.json(events))
}

exports.getOneEvent = (req, res) => {
    knex('events')
        .where('id', req.params.id)
        .then(event => res.json(event))
}

exports.addEvent = (req, res) => {
    knex('events')
        .insert(req.body)
        .returning('*')
        .then(newEvent => res.json(newEvent))
}

exports.updateEvent = (req, res) => {
    knex('events')
        .where('id', req.params.id)
        .update(req.body)
        .returning('*')
        .then(updatedEvent => res.json(updatedEvent))
}

exports.removeEvent = (req, res) => {
    knex('events')
        .del()
        .where('id', req.params.id)
        .returning('*')
        .then(removedEvent => res.json(removedEvent))
}