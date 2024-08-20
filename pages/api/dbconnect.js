import mysql from 'mysql2';

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  // port: process.env.MYSQL_PORT, // Uncomment if using a custom port
  waitForConnections: true,
  connectionLimit: 10, // Adjust based on your needs
  queueLimit: 0
});

// Export a query function that returns a promise
export function query(sql, values) {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// Properly close the pool when the app is shut down
process.on('SIGINT', () => {
  pool.end((err) => {
    if (err) {
      console.error('Error closing the MySQL pool:', err);
    } else {
      console.log('MySQL pool closed.');
    }
    process.exit(0);
  });
});

// Export the pool object (this is equivalent to the old connection export)
export default pool;
