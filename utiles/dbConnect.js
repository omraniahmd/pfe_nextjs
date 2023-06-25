const mongoose = require('mongoose');




export default async function dbConnect() {
    try{
        mongoose.connect('mongodb+srv://omranibeda1989:Ahmedomrani@cluster0.4zjjbaz.mongodb.net/test',
        {useUnifiedTopology:true, useNewUrlParser:true});
        console.log('connected successefully !')
    }catch (error){
          console.log(error)
    }
  
}
