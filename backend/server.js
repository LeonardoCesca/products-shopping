const express = require('express');
const cors = require('cors');

const app = express();

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

const PORT = 8081;

app.get('/login', (req, res) => {
  let users = [
    {
      id: 1,
      email: 'admin@admin.com',
      password: 'admin',
    },
  ];
  res.send(JSON.stringify(users));
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
