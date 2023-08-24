import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addItem, getData } from '../action/ProductAction';
import axios from 'axios'
import './Products.css'
import Header from '../Header/Header';
import Background from '../Background/Background';
import Footer from '../../Footer/Footer';

export default function ProductDispay(){

    const prodData = useSelector(y=>y.product);

    console.log(prodData,"lllll")

   const dispatch =  useDispatch();

     useEffect(()=>{

        axios.get("https://fakestoreapi.com/products",{
        method: "GET",
    })
      .then((response) => {

        dispatch(getData(response))
        console.log(response.data,"kkk");
      })

     },[])

     const handalAddtocart = (value)=>{
         dispatch(addItem(value))
     }

   
  return (
    <>

    <Header/>
    <Background/>

  <div className='protect'>

  <h1>Our  Exclusiv  Products </h1>

    <div className='main'>

    {
        prodData?.data?.data?.map((value)=>{
            return(
                <div className="post-1">
                <img src={value.image} alt="" />
                <div className="part-1">
                  <div className="desc">
                    <p className="name">{value.title}</p>
                  </div>

                </div>
                <div className="part-2">
                <div className="pricies">
                    <p className="price">{value.price}Rs</p>
                  </div>
                  <div className="categorys">
                    {/* <p className="category">{value.category}</p> */}
                    <button className='addtocartBtn' onClick={()=>{handalAddtocart(value)}}>Add to cart</button>
                  </div>
                  
                </div>
                <hr />
                <div className='last'>
                <p className="lorem">{value.description.slice(0, 40)}</p>

                </div>
               
              </div>
            )
        })
    }

      
    </div>

    </div>

    <Footer/>

    </>
  )
}
