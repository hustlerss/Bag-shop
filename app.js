const express = require ('express');
const app = express();
const cookieParser = require(cookie-parser);

const db = require("./config/mongoose-connection");
const { schema } = require('./models/user');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));


app.set("view engine", "ejs");

app.get('/owners',ownersRouter);
app.get('/users',usersRouter);
app.get('products',productRouter);

app.listen(3000,()=>{
    console.log("server is running on port 3000");

});