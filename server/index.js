const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));




app.listen(8800, () => {
  console.log('Backend is running');
});


