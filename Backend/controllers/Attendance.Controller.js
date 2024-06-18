import AttendanceSchema from "../modal/Attendance.Schema.js"

export const saveAttendance=async (req,res)=>{
    try {
        const {sign_in_date,sign_in_time,user_id,is_logged,sign_in_status}=req.body.userdata
         if(!sign_in_date|| !sign_in_time || !user_id || !is_logged)
            {
                return res.send("all fields are required")
            }
            const att=new AttendanceSchema({
                sign_in_date:sign_in_date,
                sign_in_time:sign_in_time,
                is_logged:is_logged,
                sign_in_status:sign_in_status,
                user:user_id


            })
            await att.save()
            return res.status(200).json({message:"Attendance marked successfully",success:true,userdata:att})
    } catch (error) {
        return res.status(500).json(error)
        
    }
}


export const getAttendance=async (req,res)=>{
    try {

        const allRecords=await AttendanceSchema.find({})
        if(!allRecords)
            {
                return res.send("records not exists")
            }
        return res.status(200).json({message:"record fetched",success:true,records:allRecords})
        
    } catch (error) {
        return res.status(500).json(error)
    }

}


// export const getAttendanceByUser = async (req, res) => {
//     try {
//         console.log("hiii")
//       const { userId } = req.body;
//       console.log(userId,"userId")
//       const products = await ProductSchema.find({ user: userId }).populate(
//         "user"
//       );
//       res.json({ success: true, products });
//     } catch (error) {
//       console.log(error);
//       return res.json({ success: false, error });
//     }
//   };


//   export const editAttendance=async(req,res)=>{
//     const { userId, productData } = req.body;
//     console.log(userId, productData);
//     try
//     {
  
//       const product = await ProductSchema.findByIdAndUpdate(
//        {_id:productData._id},
//        {
//         $set:{
//               name:productData.name,
//               image:productData.image,
//               category:productData.category,
//               price:productData.price,
//               quantity:productData.quantity
  
//         }
//       },{
//         new:true,
//         useFindAndModify:false
//       });
//       console.log(product)
//       if (!product) {
//         return res.json({ success: false, message: "Product not found" });
//       }
//       console.log(product, "product");
//       return res.json({
//         success: true,
//         message: "Product successfully updated.",
//       });
       
//     }
//       catch(error) {
//           res.status(400).json({
//             error: error
//           });
//         }
//     };