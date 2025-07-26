const mongoose = require('mongoose');
 blogSchema=new mongoose.Schema({
    blogName:{
        type: String,
         required: true,
    },
    content:{
        type:String
    },
    author:{
        type:String
    }

})
module.exports=mongoose.model('blog',blogSchema);