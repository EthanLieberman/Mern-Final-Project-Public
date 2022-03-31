// // controller does all the CRUD
// // Import model here
// // const User = require('../models/user.model');       //imports the model blueprint from models
const axios = require('axios');

// Calls the Google Maps Places API to fetch a list of restaurants based on the data passed in from the request
module.exports.getRestaraunts = (req, res) => {
    // console.log(req.params)
    axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.params.type}+restaurants+${req.params.location}&key={Private_key_here}`)
        .then(response => {
            res.json(response.data);
        })
        .catch(err => res.json(err))
}

// Calls the UNoGS API to fetch a list of movies based on the provided genre in the request
module.exports.getMovie = (req, res) => {
    // Sets the options for the axios call, including the API key - could separate into an environmental variable later
    const options = {
        method: 'GET',
        url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
        params: { genre_list: req.params.genre, type: 'movie', order_by: 'date' },
        headers: {
            'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '{Private_key_here}'
        }
    };

    axios.request(options).then(response => {
        console.log(response.data);
        res.json(response.data)
    })
        .catch(err => console.log(err));
}

// User-related CRUD functions if we choose to implement a login/reg system

// // exports all functions. these functions take in a response or request parameter and use the methods that mongoose gives us to interact with the database executing our crud functions
// module.exports.findAllUsers = (req, res) => {
//     User.find()
//         .then(allDaUsers => res.json({ users: allDaUsers }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// module.exports.findOneSingleUser = (req, res) => {
//     User.findOne({ _id: req.params.id })
//         .then(oneSingleUser => res.json({ user: oneSingleUser }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// module.exports.createNewUser = (req, res) => {
//     User.create(req.body)
//         .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// module.exports.updateExistingUser = (req, res) => {
//     User.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedUser => res.json({ user: updatedUser }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// module.exports.deleteAnExistingUser = (req, res) => {
//     User.deleteOne({ _id: req.params.id })
//         .then(result => res.json({ result: result }))
//         .catch(err => res.json({ message: 'Something went wrong', error: err }));
// }

// // optionally export as


// // module.exports = {
//     // functions are key : value pairs
//     getResaraunts: (req, res) => {

//     }

// //     findOne: (req, res) => {
//         name.findById(req.params.id)
//     },

//     update: (req, res) => {
//         name.findByIdAndUpdate(req.params.id, req.body){
//             new: true, runValidators: true
//         }
//     }
// }