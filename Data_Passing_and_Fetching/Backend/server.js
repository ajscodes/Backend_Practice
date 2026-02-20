import express from 'express';
import 'dotenv/config';
import cors from 'cors'

const app = express();
app.use(cors())

const jokes = [
    {
        "id":"1",
        "title":"First",
        "content":"This is first joke"
    },
    {
        "id":"2",
        "title":"Second",
        "content":"This si second joke"
    }
]


app.get('/api/jokes', (req,res) => {
    res.send(jokes);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started at: http://localhost:${port}`);
});