const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/feedBack");
const plm=require('passport-local-mongoose');

const userSchema=new mongoose.Schema({
 username:String,
 name:String,
 email:String,
 password:String,
 contact:Number, 
 profileImage:String,
 boards:{
  type:Array,
  default:[]

 },
 posts:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }
 ]

});
userSchema.plugin(plm);

module.exports=mongoose.model("User", userSchema);