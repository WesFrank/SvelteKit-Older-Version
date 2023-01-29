/** @type {import('./$types').RequestHandler} */

// GET
export async function GET({url}) {
 
  const completed = url.searchParams.get('completed')

  const response = {
    status: 200,
    body: {
      completed: "Expense"
    }
  }

  if (completed === 'true') {

    response.body.completed = "true";

  } else if (completed === 'false') {

    response.body.completed = 'false';

  }
 
  return new Response(JSON.stringify(response));

}

// Test

import { config } from 'dotenv';

config();

// Fetch connection string from dotenv file
const mongodb_uri = String( process.env['MONGODB_URI']);

import {MongoClient} from 'mongodb';

import {ObjectId} from 'mongodb';

import connectToDatabase from '../../../lib/db.js'

connectToDatabase();