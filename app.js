const express = require ('express');
const app = express();
const cookieParser = require("cookie-parser");
const path = require ('path');

const db = require("./config/mongoose-connection");
const ownersRouter = require("./routes/ownersRouter")
const productsRouter = require("./routes/productsRouter")
const usersRouter = require("./routes/usersRouter")
const { schema } = require('./models/userModel.js');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));


app.set("view engine", "ejs");

// app.js (fix this)
app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);


app.listen(3000);