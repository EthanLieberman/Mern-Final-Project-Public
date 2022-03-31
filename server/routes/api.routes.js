const ApiController = require('../controllers/api.controller');   // sets a variable containing all the exports from the controllers

// Routes to call external APIs from the backend to circumvent CORS issues
// movie API call is currently disabled to limit the amount of calls sent to that API, because the free tier has a very low limit
module.exports = app => {
    app.get('/getData/:type/:location', ApiController.getRestaraunts)
    app.get('/getMovie/:genre', ApiController.getMovie)
}

// Unused user routes

// module.exports = app => {
//     app.get('/api/users', UserController.findAllUsers);     // uses app that got passed in from the server.js runs a .method on it being a type of http action, passes in the url as a variable and executes the controller.function we defined from controllers and exported.
//     app.get('/api/users/:id', UserController.findOneSingleUser);
//     app.put('/api/users/:id', UserController.updateExistingUser);
//     app.post('/api/users', UserController.createNewUser);
//     app.delete('/api/users/:id', UserController.deleteAnExistingUser);
// }
