import * as express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// set const variables
const app = express.default();
const PORT = process.env.PORT || 8080;

// get path to react build
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const client_path = path.join(__dirname, '..', 'client');

// tell express to use the react build
app.use(express.static(client_path));

// serve react
app.get('/', function (req, res) {
  res.sendFile(client_path + "index.html");
});

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
