const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./database');

//setings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use(cors({origin: 'http://localhost:4500'}));

//routes
app.use('/api/listDeploys',require('./routes/deploys.routes'));

//stating the server

app.listen(app.get('port'), () => {
    console.log(`Server on port: `,app.get('port'))
});

