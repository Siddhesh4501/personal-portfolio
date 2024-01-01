// /lib/mongodb.js

import { error } from 'console';
import { Db, MongoClient, MongoClientOptions, ServerApiVersion } from 'mongodb';
import { exit } from 'process';

const uri = process.env.MONGODB_URI || "";
if(uri == undefined){
    error("Definied the uri to cluster");
    exit(0);
}

let client: MongoClient;
let database: Db;
let isConnected : boolean = false;

async function connectDB() {
  if (client && isConnected) {
    return client;
  }

  try{
    client = new MongoClient(uri,{
      serverSelectionTimeoutMS: 600, // 60 seconds timeout
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
      },);
  
    await client.connect().catch((error)=>{
      throw new Error(error);
    });
    database = client.db('My-Portfolio-Data');
    return client;
  }
  catch(error){
    // console.log("in mongodb error");
    throw new Error("Could not connect to DB");
  }

}

async function disconnectDB() {
  if (client) {
    await client.close();
    isConnected = false
  }
}

export { connectDB, disconnectDB, database };
