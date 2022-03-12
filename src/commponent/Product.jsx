import React,{useState,useEffect} from "react";
import {useDispatch} from "react-redux"
import {addCart} from "../redux/action"
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import Skeleton from "react-loading-skeleton";


const Product = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState([false])

    const dispatch = useDispatch()
    const addProduct = (product) => {
        dispatch(addCart(product))
    }

   useEffect(() => {
       const getProduct = async() => {
       setLoading(true)   
       const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        setProduct(await response.json())
        setLoading(false)
        
    }
    getProduct()
   },[id])
   const Loading = () => {
       return(
       <>
       <div className="col-md-6">
           <Skeleton height={400}/>
       </div>
     
       </>
       )
   }

   const ShowProduct = () => {
      return(
         <>
          <div className="col-md-6 " >
              <img src={product.image} alt={product.title}
              height="400px" width="400px" />
          </div>
          <div className="col-md-6 ">
             <h4 className='text-uppercase ,text-black-50'>
                 {product.category}
             </h4>
             <h1 className="display-5">{product.title}</h1>
             <p className="load fw-bolder">
                 Rating{product.rating &&  product.rating.rate}
                <i className="fa fa-star"></i>
             </p>
             <h3 className="display-6 fw-bold my-4">${product.price}</h3>
             <p className="load">{product.description}</p>
             <button className="btn btn-outline-dark px-4 py-2"
             onClick = {() =>addProduct(product)}>
                 Add to Cart
             </button>
             <Link to="/cart" className="btn btn-dark ms-2 px-3"> go to Cart</Link>
          </div>
          </>
      )
   }
    return(
        
        <div key={product.id}>
         <div className="container py-5"key={product.id}>
             <div className="row py-4">
                 {loading ? <Loading/>: <ShowProduct/>}
             </div>
         </div>
        </div>
    )
}

export default Product