import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://dbUser:dbUserPassword@cluster0.v225a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
