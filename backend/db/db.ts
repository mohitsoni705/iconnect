import pkg from "pg";
import dotenv from "dotenv";


const { Pool } = pkg;

dotenv.config();

const url = process.env.POSTGRESS_URL as string;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});