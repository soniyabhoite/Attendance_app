import mongoose,{Schema} from "mongoose";

var attendanceSchema=new Schema({

   sign_in_date:{
             type:String,
             required:true
      },
      sign_in_time:{
        type:String,
        required:true

      },
      sign_out_time:{
        type:String,
        required:false

      },
      user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
      }

})

export default mongoose.model('attendance',attendanceSchema)