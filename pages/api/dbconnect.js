import mysql from 'mysql2';

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

// Use a single instance to handle the shutdown
let isShuttingDown = false;

function handleShutdown() {
  if (isShuttingDown) return;
  isShuttingDown = true;

  pool.end((err) => {
    if (err) {
      console.error('Error closing the MySQL pool:', err);
    } else {
      console.log('MySQL pool closed.');
    }
    process.exit(0);
  });
}

// Add listener only if it hasn't been added yet
process.once('SIGINT', handleShutdown);
process.once('SIGTERM', handleShutdown);

export default pool;
