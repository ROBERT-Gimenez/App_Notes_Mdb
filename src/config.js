const { config } = require("dotenv");

config();

 const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/app-notes";

  const PORT = 3000;
  module.exports = MONGODB_URI;
  module.exports= PORT;