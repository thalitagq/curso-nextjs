import { MongoClient } from 'mongodb'

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://thalita:EGWyZYboKdEITTAU@sandbox.eovzz.mongodb.net/auth-demo?retryWrites=true&w=majority"
  )

  return client
}