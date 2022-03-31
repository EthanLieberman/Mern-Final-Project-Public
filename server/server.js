const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 8000;

// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
// const AllMyRoutes = require("./server/routes/app.routes");
// AllMyRoutes(app);

require('./routes/api.routes')(app)

app.listen(port, () => console.log(`Listening on port: ${port}`) );
