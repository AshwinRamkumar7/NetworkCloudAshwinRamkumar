import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve( `./secrets/secrets.env`) });
export const config ={
    HOST:process.env.HOST,
    USERNAME:process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
    DATABASE: process.env.DATABASE
}