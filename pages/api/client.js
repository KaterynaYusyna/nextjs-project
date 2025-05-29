import { MongoClient } from 'mongodb';

if (!process.env.DB_USERNAME) {
  throw new Error('Invalid/Missing environment variable: "DB_USERNAME"');
}

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.slvumcy.mongodb.net/`;

let client;

try {
  client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (error) {
  res.status(500).json({ message: 'Could not connect to database.' });
}

export default client;
