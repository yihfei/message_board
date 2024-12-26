const express = require('express');
const app = express();
const path = require('node:path');

const indexRouter = require('./routes/index')
const messageRouter = require('./routes/messageRouter')


app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/new', messageRouter);

app.set("view engine", "ejs");


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});