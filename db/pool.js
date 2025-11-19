const { Pool } = require('pg');

module.exports = new Pool {
      connectionString: "postgresql://adrianblaze@localhost:5432/top_users"

}