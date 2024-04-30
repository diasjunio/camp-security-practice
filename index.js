// index.js
const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Endpoint de login (vulnerável a SQL Injection)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Check if both username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: 'Missing credentials' });
  }

  // Hash the provided password and compare it with the stored hash
  const user = await User.findOne({ where: { username } });
  if (user) {
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      res.json({ message: 'Login successful', user: user.toJSON() });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  }
});

// Endpoint de listagem de usuários (expondo dados sensíveis)
app.get('/users', async (req, res) => {
  const users = await User.findAll({
    attributes: ['id', 'username'], // Exclude 'password'
  });
  res.json(users);
});

// Endpoint de detalhe do usuário logado (expondo senha)
app.get('/profile', async (req, res) => {
  const { username } = req.query;
  const user = await User.findOne({ where: { username: username ?? null } });
  if (user) {
    const responseUser = {
      id: user.id,
      username: user.username,
    };

    res.json(responseUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
