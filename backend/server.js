const express = require('express');

const app = express();

const PORT = 8081;

app.get('/login', (req, res) => {
  let users = [
    {
      email: 'admin@admin.com',
      password: 'admin',
    },
    {
      email: 'master@master.com',
      password: 'master',
    },
  ];
  res.send(JSON.stringify(users));
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
