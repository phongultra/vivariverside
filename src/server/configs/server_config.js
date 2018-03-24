import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
const app = express();

app.use(morgan('dev'))
app.use('/', express.static('./src/client'));
app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '../../../client/index.html');
});


export default app;