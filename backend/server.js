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

app.get('/products', (req, res) => {
  let products = [
    {
      id: 1,
      title: 'TLOU 2',
      subtitle: 'PS4',
      image: 'the-last-of-us.png',
      price: '$199',
    },
    {
      id: 2,
      title: 'Cyberpunk',
      subtitle: 'PS4, PC, XBOX',
      image: 'cyberpunk.png',
      price: '$200',
    },
    {
      id: 3,
      title: 'Days Gone',
      subtitle: 'PS4',
      image: 'days-gone.png',
      price: '$127',
    },
    {
      id: 4,
      title: 'God of War',
      subtitle: 'PS4',
      image: 'god-of-war.png',
      price: '$127',
    },
    {
      id: 5,
      title: 'TLOU 2',
      subtitle: 'PS4',
      image: 'the-last-of-us.png',
      price: '$199',
    },
    {
      id: 6,
      title: 'Cyberpunk',
      subtitle: 'PS4, PC, XBOX',
      image: 'cyberpunk.png',
      price: '$200',
    },
    {
      id: 7,
      title: 'Days Gone',
      subtitle: 'PS4',
      image: 'days-gone.png',
      price: '$127',
    },
    {
      id: 8,
      title: 'God of War',
      subtitle: 'PS4',
      image: 'god-of-war.png',
      price: '$127',
    },
    {
      id: 9,
      title: 'TLOU 2',
      subtitle: 'PS4',
      image: 'the-last-of-us.png',
      price: '$199',
    },
    {
      id: 10,
      title: 'Cyberpunk',
      subtitle: 'PS4, PC, XBOX',
      image: 'cyberpunk.png',
      price: '$200',
    },
    {
      id: 11,
      title: 'Days Gone',
      subtitle: 'PS4',
      image: 'days-gone.png',
      price: '$127',
    },
    {
      id: 12,
      title: 'God of War',
      subtitle: 'PS4',
      image: 'god-of-war.png',
      price: '$127',
    },
  ];
  res.send(JSON.stringify(products));
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
