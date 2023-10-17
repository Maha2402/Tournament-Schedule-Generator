
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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


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



