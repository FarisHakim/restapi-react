const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "12345",
  database: "sendemail",
});

client.connect();
var getUser = client.query(
  "SELECT * FROM users LEFT JOIN nationalitys ON users.id = nationalitys.id_user LEFT JOIN ages ON users.id = ages.id_user",
  (err, res) => {
    if (!err) {
      console.log(res.rows);
    } else {
      console.log(err.message);
    }

    client.end;
    return res.rows;
  }
);
exports.default = getUser;
