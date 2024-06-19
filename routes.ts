import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();
const dbPath = path.resolve(__dirname, 'db.json');

interface Submission {
    name: string;
    email: string;
    phone: string;
    github_link: string;
    stopwatch_time: string;
}

// Ensure db.json file exists
if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify([]));
}

router.get('/ping', (req: Request, res: Response) => {
    res.send(true);
});

router.post('/submit', (req: Request, res: Response) => {
    const newSubmission: Submission = req.body;
    const submissions: Submission[] = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    submissions.push(newSubmission);
    fs.writeFileSync(dbPath, JSON.stringify(submissions, null, 2));
    res.send({ success: true });
});

router.get('/read', (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string, 10);
    const submissions: Submission[] = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    // Ensure always returning an array, even for a single submission
    if (index >= 0 && index < submissions.length) {
        res.send([submissions[index]]);
    } else {
        res.status(404).send({ error: 'Submission not found' });
    }
});

export default router;
