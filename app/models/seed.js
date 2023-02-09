const mongoose = require('mongoose')
const Character = require('./characters')
const db = require('../../config/db')

// seed array of Character objects
const seedCharacter = [
    { name: 'Finn', voicedBy: 'Johnathan Frakes', human: true},
    { name: 'Jake', voicedBy: 'John DiMaggio', human: false},
    { name: 'Ice King', voicedBy: 'Tom Kenny', human: false}
]

// connect to mongoose and seed characters to DB
mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        Character.deleteMany()
            .then(deletedChars => {
                console.log('We deleted: ', deletedChars)

                Character.create(seedCharacter)
                    .then(Char => {
                        console.log('We forumulated: ', Char)
                        mongoose.connection.close() // close connection upon successful character creation
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close() // close connection on seeding error
                    })
            })
        .catch(error => {
            console.log(error)
            mongoose.connection.close() // close connection on error
        })
    })
.catch(error => {
    console.log(error)
    mongoose.connection.close() // close connection on error
})