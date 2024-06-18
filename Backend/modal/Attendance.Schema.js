import mongoose,{Schema} from "mongoose";

var attendanceSchema=new Schema({

   sign_in_date:{
             type:String,
             required:false,
            
      },
      sign_in_time:{
        type:String,
        required:false

      },
      sign_out_time:{
        type:String,
        required:false

      },
      sign_in_status:{
        type:String,
        required:true
    

      },
       is_logged:{
        type:Boolean,
        required:true,
        default:false
       },
      user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
      }

})

export default mongoose.model('attendance',attendanceSchema)