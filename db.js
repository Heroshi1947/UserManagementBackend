const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/pwSkillsAssignment'; // Replace with your MongoDB connection string
const dbName = 'usermanagement'; // Replace with your database name

const client = new MongoClient(uri, { useUnifiedTopology: true });

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

function getDatabase() {
  return client.db(dbName);
}

module.exports = { connect, getDatabase };