const path = require('path');
const fs = require('fs');
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'strapimygodai.c52ocuu267b3.eu-central-1.rds.amazonaws.com',
      port: 5432,
      database: 'strapimygodai',
      user: 'postgres',
      password: 'strapimygodai',
      ssl: {
        rejectUnauthorized: false, // Allow self-signed certificates
        ca: fs.readFileSync(path.join(__dirname, 'rds-ca-2019-eu-central-1.pem')).toString(),
      },
    },
    debug: false,
  },
});
