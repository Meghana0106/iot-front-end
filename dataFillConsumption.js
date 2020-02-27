const {
    Pool,
    Client
} = require('pg');

const format = require('pg-format');



const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'iot',
    password: 'anitha1397',
    port: 5432,
});

var moment = require('moment');
var time = moment().subtract(1, 'y').add(1, 'h');

var time_format = time.format('YYYY-MM-DD HH:mm:ss Z');
//console.log(time_format);



const monthData = [];
var baseReading = 50000;
var rrno = "12345098761";
var m_id = "112221";
var type = "Household";

// for (const value in monthData) {
// for(let i=0;i<monthData.length;i++)

for(let i=0;i<4*24*365;i++)
	{
        //console.log(rrno);
        //console.log(m_id);
        //console.log(type);

        baseReading = baseReading + Math.round(Math.random()* 10)
        //console.log(baseReading);


        var time = moment().startOf('year').add(15*i, 'm');

        var time_format = time.format('YYYY-MM-DD HH:mm:ss Z');
        //console.log(time_format);

        const value = [ rrno, m_id, type, baseReading, time_format ];


        // print interval of 15 minutes
        monthData.push(value)
    }
    console.log(monthData);

//      15 mintues



    
    //  const value = [
    
    //      "6543",
    //      "463",
    //      "Household",
    //     "7000",
    //     time_format,
        
      
    //  ];
    // monthData.push(value)
// }

var queryData = format('INSERT INTO consumption( rrno, m_id, type, unit,consumption_at) VALUES %L', monthData);

pool.connect((err, client, done) => {
    if (err) {throw err}
        
    client.query(queryData, (err, res) => {
        
        done();
        if (err) {
            throw err
        }
        console.log('consumption:', res);
    
    });
});
