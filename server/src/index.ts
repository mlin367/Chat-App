import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const DEFAULT_PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'))
})

app.listen(DEFAULT_PORT, () => console.log(`app is listening on port ${DEFAULT_PORT}`));