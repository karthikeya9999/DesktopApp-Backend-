import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;
const DB_FILE = 'db.json';

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
    res.send(true);
});

app.post('/submit', (req, res) => {
    const newSubmission = req.body;
    let submissions = [];
    if (fs.existsSync(DB_FILE)) {
        submissions = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
    }
    submissions.push(newSubmission);
    fs.writeFileSync(DB_FILE, JSON.stringify(submissions, null, 2));
    res.sendStatus(200);
});

app.get('/read', (req, res) => {
    if (fs.existsSync(DB_FILE)) {
        const submissions = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
        res.json(submissions);
    } else {
        res.status(404).send('No submissions found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
