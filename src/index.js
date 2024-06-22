const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/index');
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const { sequelize } = require('./models');
const setupAndStartServer = async () => {

    // create the express server
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use('/api',ApiRoutes);
    
    app.listen(PORT, () => {
        console.log('Server is running on port 3000');
        if(process.env.SYNC_DB) {
            db.sequelize.sync({alert: true});
        }
    });
    }

    setupAndStartServer();