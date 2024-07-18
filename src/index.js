const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const CRON = require('./utils/common/cron-jobs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);
// app.use('/flightsService/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    CRON();
});

/**
 * In class task
 * Setup flights table using sequelize
 */ 


// const express = require('express');
// const { ServerConfig } = require('./config');
// const apiRoutes = require('./routes');
// let CRONS;

// try {
//     CRONS = require('./utils/common').CRONS;
// } catch (err) {
//     console.error('Error loading CRONS module:', err);
//     process.exit(1); // Exit the process if module loading fails
// }

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use('/api', apiRoutes); // Mounting API routes under /api endpoint

// app.listen(ServerConfig.PORT, () => {
//     console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
//     if (CRONS) {
//         CRONS();
//     } else {
//         console.error('CRONS module not loaded correctly.');
//     }
// });
