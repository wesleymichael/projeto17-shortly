import { db } from "../database/database.connection.js";

export async function insertUserRepository(name, email, hash){
    return await db.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, hash]);
}

export async function insertSessionRepository(token){
    return await db.query(`INSERT INTO sessions (token) VALUES ($1);`, [token]);
}

export async function getUserByEmail(email){
    const result = await db.query(`SELECT * FROM "users" WHERE email = $1`, [email]);
    return result;
}