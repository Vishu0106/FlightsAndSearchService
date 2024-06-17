const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async () => {

    // create the express server
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get('/', (req, res) => {
        res.send('Hello World!'); 
    });
    
    app.listen(PORT, () => {
        console.log('Server is running on port 3000');
    });
    }

    setupAndStartServer();