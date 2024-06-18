import React from 'react'
import axios from 'axios'

const Show_User_Attendance = () => {
    
  const[ products ,setProducts]=useState([])
  const router=useNavigate();
  const { state } = useContext(AuthContext);
  const userid=localStorage.getItem('userId')
  useEffect(() => {
  async function getData() {
      try {
        console.log(state,"state")
        
          const response = await axios.post('https://nike-mern-clone.onrender.com/api/v1/product/get-products-by-seller',   { userId: userid })
          console.log(response.data.products, "response.data")
          if (response?.data?.success) {
              all(response.data.products)
          }
        // products=response.data
         // console.log(products)
         
      } catch (error) {
          console.log(error)
      }
  }
  getData();
}, [state]);

 async function Routing(id){
  router(`/single-product/${id}`); //template parsing ${}
 }
 async function Edit(id)
  { 

    router(`/edit-product/${id}`);
     
  }

 async function Delete(productId)
  {


 //  const userid=localStorage.getItem('userId')

  

    try {
     const response = await axios.post("https://nike-mern-clone.onrender.com/api/v1/product/delete-product-by-seller", {
        userId: userid,
        productId: productId,
      });
      if (response.data.success) {
        toast.success(response.data.message);
      
        router("/get-all-products-seller");
      }
    } catch (error) {
      console.log(error);
    }
  }
  function all(p)
  {
      setProducts(p)
  }

  return (
    <SellerProtected>
      <div>
          <div className=" d-flex col float-end    " >
           <div className="d-flex">
             <p className="top-t fw-bold fs-5">Profile</p>
             <p className="top-t mx-3"></p>
          </div>
        
          <div className="d-flex">
             <p className="top-t fw-bold fs-5"><a href='' onClick={() => router('/add-product')} >Add Product</a></p>
             <p className="top-t mx-3"></p>
          </div>
          <div className="d-flex">
          <p className="top-t fw-bold fs-5  "><a href='' onClick={() => router('/get-all-products-seller')} >Products</a></p>
             <p className="top-t mx-3"></p>
          </div>
        
      
       </div>
       <div  className="pt-4 mt-4">
          <br/>
          <h2>Your Products</h2><br/>
          <br/>
          {products?.length? <div className='row row-cols-1 row-cols-md-3 g-4' style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>

         
               {products.map((product)=>(
                //   <div className='card' onClick={()=>router(`/single-product/${product._id}`)}  style={{cursor:'pointer' ,width:"25%"}}>
                    <div className='card'  style={{cursor:'pointer' ,width:"25%"}}>
                   <img src={product.image} alt=""  className='card-img-top pt-3' style={{height:'200px',width:'170px',margin:'auto'}}/>
                   <div className='card-body'>
                   <h5 className='card-title'>{product.name}</h5>
                  <h6>{product.category}</h6>
                  <h3>${product.price}</h3>
                  {/* <h6><p className='h6'>Quantiy:{product.quantity}</p></h6> */}
                  </div>
                  <div class="card-footer">
                  <button class="btn btn-primary pr-6" onClick={()=>Edit(product?._id)}>Edit</button>
                  <button class="btn btn-danger px-6 m-2" onClick={() => Delete(product?._id)}>Delete</button>
                  </div>
                 </div>
      

              ))} 
            
            
              </div>:
              <div>Loading...</div>
               }
               </div>
              
              <Footer/>
          
      </div>
      </SellerProtected>
      
  )
}

export default Show_User_Attendance