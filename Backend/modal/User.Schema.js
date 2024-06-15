import mongoose ,{Schema} from "mongoose";

var userSchema=new Schema(
    {
        username:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phone_no:{
            type:Number,
            required:false
        }
    }
)

export default mongoose.model('user',userSchema)