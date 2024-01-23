import * as mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';
import { connectionOptions } from './config'

dotenv.config()

export async function executeQuery(query: string, values?: any[]): Promise<any> {
    const pool = mysql.createPool(connectionOptions);
    let connection;
    try {
        connection = await pool.getConnection();
        console.log('Connected to MySQL database');

        const [rows, fields] = await connection.query(query, values);
        return rows;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    } finally {
        if (connection) {
            connection.release();
        }
    }
}