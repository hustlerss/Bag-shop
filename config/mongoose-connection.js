const mongoose =require ('mongoose');

mongoose
.connect("mongodb://127.0.0.1:27017/bag-shop")
.then(function(){
    console.log("Db connected succefully"
    );
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.connection;
