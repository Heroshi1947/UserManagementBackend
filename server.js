const express = require('express');
const app = express();
const db = require('./db');

// Connect to MongoDB
db.connect();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.post('/users', async (req, res) => {
  const { username, email, password } = req.body;

  // Save the user to the database
  const database = db.getDatabase();
  const usersCollection = database.collection('users');
  const result = await usersCollection.insertOne({ username, email, password });

  res.json({ message: 'User created successfully', userId: result.insertedId });
});

app.post('/login', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the user exists in the database
  const database = db.getDatabase();
  const usersCollection = database.collection('users');
  const user = await usersCollection.findOne({ username, email, password });

  if (user) {
    res.json({ message: 'User Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});