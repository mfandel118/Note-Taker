// Import & implemment Express
const express = require('express');
const app = express();

// Declare port variable
const PORT = 3001;

// Import routes
// const apiRoutes = require('./routes/api-routes');
// const htmlRoutes = require('./routes/html-routes');
const routes = require('./routes')

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

// Listener to begin server
app.listen(PORT, () => 
    console.log(`Express server listening on PORT: ${PORT} 🚀`)
);