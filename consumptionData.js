const express = require('express');
const app = express();
const router = express.Router();
const {
    Pool,
    Client
} = require('pg');
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'iot',
    password: 'anitha1397',
    port: 5432,
});

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1)
});


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/consumption', (req, res) => {
    pool.query("SELECT * FROM consumption" , (err,data)=>{
        
        if (err) {
           
            throw err
        }
        res.send(data.rows);
        console.log('consumption:', data);
       
     })

});


router.get('/consumptionPerYear/:rrno', (req, res) => {
    console.log(req.params.rrno);
    pool.query("SELECT date_trunc('month',consumption_at) x, \
    MAX (unit) y \
FROM consumption \
WHERE rrno = $1 \
GROUP BY \
    x \
ORDER BY \
    x ",[req.params.rrno] , (err,data)=>{
        
        if (err) {
            
            throw err
        }
        res.send(data.rows);
        console.log('consumption:', data.rows);
        
     })

});


app.use(router);

const port = process.env.PORT || 3000;
app.listen(3000, ()=> console.log(`listening on port ${port}.....`));