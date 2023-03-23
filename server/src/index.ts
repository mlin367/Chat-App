import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { Server } from 'socket.io';

const app = express();
const DEFAULT_PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
});

const server = app.listen(DEFAULT_PORT, () =>
  console.log(`app is listening on port ${DEFAULT_PORT}`)
);

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => console.log('a user disconnected'));

  socket.on('chat message', (msg: string) => {
    io.emit('chat message', msg);
  });
});

export default server;
