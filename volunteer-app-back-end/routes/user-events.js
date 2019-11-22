const express = require('express')
const router = express.Router()
const userEventsController = require('../controllers/user-events')

router.get('/user_events', userEventsController.getAllUserEvents);
router.get('/user_events/:id', userEventsController.getOneUserEvent);
router.post('/user_events', userEventsController.addUserEvent);
router.delete('/user_events/:id', userEventsController.removeUserEvent);

module.exports = router