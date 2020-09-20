const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const RouterExp = require('./routes/routes')
const path = require('path')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(RouterExp)

async function start() {
    try {
        await mongoose.connect('mongodb+srv://artem:reddevils1878@cluster0.dnbxe.mongodb.net/cards', {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(3001, () => {
            console.log('Server has been started...')
        })
    } catch (err) {
        console.log(err)
    }
}

start()