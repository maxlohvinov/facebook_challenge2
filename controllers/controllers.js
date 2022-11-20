const { Feed } = require("../models/Feed")

const getHomepage = (req, res) => {
    Feed.find()
    .then(result => 
        res.render('index', {result}))
    .catch(err => console.log(err))
    
}

const postNewFeed = (req, res) => {
    if (req.method === 'GET'){
        res.render('index')
    } 

    if (req.method === 'POST'){
        console.log(req.body)
        const feed = new Feed(req.body)
        feed.save()
            .then( result => res.redirect('/'))
            .catch(err =>console.log(err))
       
    }
}
const showOneFeed = (req, res) => {
    Feed.findById({_id: req.params.id})
    .then(result =>
        res.render('OneFeed', { result }))
    .catch(err => console.log(err))
   
    } 

const updateOneFeed = (req, res) => {
    if (req.method === 'GET') {
        Feed.findById({ _id: req.params.id })
            .then(result =>
                res.render('editFeed', { result }))
            .catch(err => console.log(err))
    }
    if (req.method === 'POST') {
        Feed.findByIdAndUpdate({ _id: req.params.id })
            .then(result => {
                result.name = req.body.name
                result.message = req.body.message
                result.save()
                    .then(() =>
                     res.render('OneFeed', { result }))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }
}
const deleteOneFeed = (req, res) => {
    Feed.findByIdAndDelete({_id: req.params.id})
    .then(result =>res.redirect('/'))
    .catch( err => console.log(err))
}


   
module.exports = {
    getHomepage,
    postNewFeed,
    showOneFeed,
    updateOneFeed,
    deleteOneFeed
}