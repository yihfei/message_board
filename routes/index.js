const { Router } = require('express');

const indexRouter = Router();

const messages = [
    {
      text: 'Hi there!',
      user: 'Amando',
      added: new Date(),
    },
    {
      text: 'Hello World!',
      user: 'Charles',
      added: new Date(),
    },
  ]

indexRouter.get('/', (req, res) => {
    res.render('index', { title: 'Home', messages: messages })
})

indexRouter.post('/new', (req, res) => {
    const { userName, messageText } = req.body
    messages.push({ user: userName, text: messageText, added: new Date() })
    res.redirect('/')
  })

indexRouter.get('/message/:id', (req, res) => {
    const { id } = req.params;
    const message = messages[id];
    res.render('message', { title: `Message ${id}`, message });
})
module.exports = indexRouter