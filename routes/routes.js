const { Router } = require('express')
const Card = require('../models/Card')
const setCorrectAgeAndDate = require('../public/setCorrectAgeAndDate')

const router = Router()

router.get('/', async (req, res) => {
    const cards = await Card.find({}).lean()

    setCorrectAgeAndDate(cards)

    res.render('index', {
        title: 'Home',
        isHome: true,
        cards
    })
})

router.get('/create', async (req, res) => {
    res.render('create', {
        title: 'Create',
        isCreate: true
    })
})

router.post('/create', async (req, res) => {
    const card = new Card({
        name: req.body.name,
        surname: req.body.surname,
        date: req.body.date,
        country: req.body.country
    })

    await card.save()
    res.redirect('/')
})

router.post('/completed', async (req, res) => {
    await Card.findByIdAndRemove(req.body.id)

    res.redirect('/')
})

module.exports = router