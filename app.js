/*const express = require('express');

const { Pool } = require('pg'); // Import the PostgreSQL library

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'maha',
    password: '123',
    port: 5432, 
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname));

app.post('/addToSchedule', (req, res) => {
    const dateinput = req.body.dateinput;
    const teamselection = req.body.teamselection;

    // Insert the data into the PostgreSQL database
    pool.query(
        'INSERT INTO schedule (dateinput, teamselection) VALUES ($1, $2)',
        [dateinput, teamselection],
        (error, results) => {
            if (error) {
                console.error('Error inserting data:', error);
                res.send('Error submitting the form.');
            } else {
                res.send('Form submitted successfully!');
            }
        }
    );
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/task1.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});*/
/*const bodyParser = require('body-parser');
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'maha',
    password: '123',
    port: 5432,
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/task1.html');
});
// Define a middleware to set response headers for CORS (Cross-Origin Resource Sharing).
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.post('/addToSchedule', (req, res) => {
    const dateinput = req.body.dateinput;
    const teamselection = req.body.teamselection;

    // Use a try-catch block to handle errors
    try {
        pool.query(
            'INSERT INTO schedule (dateinput, teamselection) VALUES ($1, $2)',
            [dateinput, teamselection],
            (error, results) => {
                if (error) {
                    console.error('Error inserting data:', error);
                    res.status(500).json({ error: 'Error submitting the form.' });
                } else {
                    res.status(200).json({ message: 'Form submitted successfully!' });
                }
            }
        );
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Database error.' });
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
*/
/*const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'maha',
    password: '123',
    port: 5432,
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname));

app.post('/addToSchedule', (req, res) => {
    const dateinput = req.body.dateinput;
    const teamselection = req.body.teamselection
  
    pool.connect((err, client, done) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            res.status(500).send('Database connection error');
            return;
        }

       
        
     
        pool.query(
            'INSERT INTO schedule (dateinput, teamselection) VALUES ($1, $2)',
            [dateinput, teamselection],
            (error, result) => {
                done(); // Release the client back to the pool
        
                if (error) {
                    console.error('Error inserting data:', error);
                    res.status(500).send('Error submitting the form.');
                } else {
                    res.send('Form submitted successfully!');
                }
            }
        );
                
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/task1.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
*/
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres', // Replace with your PostgreSQL username
    host: 'localhost', // Replace with your PostgreSQL host
    database: 'maha', // Replace with your PostgreSQL database name
    password: '123', // Replace with your PostgreSQL password
    port: 5432, // Replace with your PostgreSQL port
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files (e.g., HTML)
app.use(express.static(__dirname));

app.post('/addToSchedule', (req, res) => {
    const dateinput = req.body.dateinput;
    const teamselection = req.body.teamselection;

    pool.query(
        'INSERT INTO schedule (dateinput, teamselection) VALUES ($1, $2)',
        [dateinput, teamselection],
        (error, result) => {
            if (error) {
                console.error('Error inserting data:', error);
                res.status(500).send('Error submitting the form.');
            } else {
                res.send('Form submitted successfully!');
            }
        }
    );
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/task1.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



