import { MongoClient } from "mongodb";

export async function getMongoDatabase() {
  const mongoUri = process.env.mongoURI || process.env.MONGO_URI || process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME || process.env.MONGO_DB_NAME || process.env.MONGODB_DB_NAME;

  if (!mongoUri) {
    throw new Error("Mongo URI is missing. Add mongoURI in environment variables.");
  }

  if (!dbName) {
    throw new Error("Mongo DB name is missing. Add DB_NAME in environment variables.");
  }

  let mongoClientPromise = globalThis.__mongoClientPromise;

  if (!mongoClientPromise) {
    const mongoClient = new MongoClient(mongoUri);
    mongoClientPromise = mongoClient.connect();
    globalThis.__mongoClientPromise = mongoClientPromise;
  }

  const mongoClient = await mongoClientPromise;
  return mongoClient.db(dbName);
}
