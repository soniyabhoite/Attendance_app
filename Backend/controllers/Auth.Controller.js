import UserSchema from "../modal/User.Schema.js"

export const register=async (req,res)=>{
    try {
        
        console.log(req.body)
        const {username,email,password,phone_no}=req.body.userdata
        if(!username || !email || !password )
            {
               return res.send("all fields are required")
            }
            const user=new UserSchema({
                username:username,
                email:email,
                password:password,
                phone_no:phone_no

            })
            await user.save()
            return res.json({message:"user stored successfully",success:true})


    } 
    catch (error) {

        return res.status(500).json(error)
    }

      
}

export const login =async(req,res)=>{
    try {

        console.log(req.body)
        const {email,password}=req.body.loginData
        const user=await UserSchema.findOne({email:email,password:password})
        console.log(user)
        if(!user)
            {
                return res.json({message:"user not exists",success:false})
            }

        return res.json({message:"login successful",success:true,userData:user})


        
    } catch (error) {
        return res.status(500).json(error)
        
    }
}

export const getUser=async(req,res)=>{
    try {
           var allUser=await UserSchema.find()
           if(!allUser)
            {
                return res.send("user not exits")
            }
            return res.status(200).json({message:"user fetched successfully", user:allUser,success:true})
            
    } catch (error) {
        return res.status.json(error)
    }
}