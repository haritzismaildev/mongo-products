require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri    = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

let client, db;
async function connect() {
  if (!db) {
    client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db = client.db(dbName);
  }
  return db;
}

async function close() {
  await client?.close();
}

module.exports = { connect, close };