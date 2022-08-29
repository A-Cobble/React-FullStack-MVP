import express from 'express';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ...(process.env.NODE_ENV === "production" 
    ? {
        ssl: {
            rejectUnauthorized: false
        }
    }
    : {}),
});

app.use(express.static("static"));
app.use(express.json());
app.use(cors());

const unknownHTTP = (req, res, next) => {
    res.sendStatus(404);
    next();
};


//Get all bugs from tracker
app.get('/api/bugs', (req, res, next) =>{
    pool.query('SELECT * FROM bugs').then((data) =>{
        res.send(data.rows);
    }).catch(next);
})

//Get all buts for a specific project
app.get('/api/bugs/:project', (req, res, next) => {
    const { project } = req.params;
    pool.query('SELECT * FROM bugs WHERE project IN ($1);', [project]).then((data) =>{
        let projectName = data.rows
        if(projectName) {
            res.send(projectName)
        };
    }).catch(next);
})

//add a bug to the tracker
app.post('/api/bugs', (req, res, next) => {
    const {  project, bug_summary, bug_description, priority, status, reporter, completed } = req.body;
    if (project && bug_summary && priority && reporter){
        pool.query(`INSERT INTO bugs(project, bug_summary, bug_description, priority, status, 
            reporter, completed) VALUES ($1, $2, $3, $4, $5, $6, $7);`,
        [project, bug_summary, bug_description, priority, status, reporter, completed])
        .then((data) => {
            res.status(201).send(data.rows[0])
        }).catch(next);
    } else {
        res.sendStatus(400);
    }
})

//Patch request using the id
app.patch("/api/bugs/:bug_sum", (req, res, next) => {
    const { bug_sum } = req.params;
    const { project, bug_summary, bug_description, priority, status, reporter, completed } = req.body
    pool.query(`UPDATE bugs SET project = COALESCE ($1, project), bug_summary = COALESCE ($2, bug_summary), 
        bug_description = COALESCE ($3, bug_description), priority = COALESCE ($4, priority), 
        status = COALESCE ($5, status), reporter = COALESCE ($6, reporter), 
        completed = COALESCE ($7, completed) WHERE bug_summary IN ($8) Returning *;`,
        [project, bug_summary, bug_description, priority, status, reporter, completed, bug_sum])
    .then((data) => {
        if(data.rows.length === 0) {
            console.log(data.rows)
            res.sendStatus(404);
        } else {
            res.status(200).send(data.rows);
        }
    }).catch(next);
})

app.use(unknownHTTP);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendStatus(500)
})
