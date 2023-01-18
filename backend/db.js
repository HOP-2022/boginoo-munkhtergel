const mongoose = require('mongoose')
const uri= 'mongodb+srv://teka:Ru2GifFF2oGa47Hb@my-news-database.gwxotbc.mongodb.net/test'
// Ru2GifFF2oGa47Hb
mongoose.set('strictQuery', false);
const connect = async () =>{
    try{
        await mongoose.connect(uri)
        console.log("DB connected successfully!");
    } catch(error){
        console.log(error);
    }
}
module.exports = connect