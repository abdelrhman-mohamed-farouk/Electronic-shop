import card from "../assets/عصفور.svg"
import "./Card.css"
import { serviceData } from "../Data"
import { useState } from "react"
export default function Cards() {
  const [size,setSize]= useState(0)
  return (
  
<section style={{  width: "100%", display: "flex", flexDirection: "column", background: "#eee"  }}>
  <div style={{ 
   
    display: "flex", 
    flexDirection: "column", 
    justifyContent: "center", 
    alignItems: "center", 
  }}>
    <div style={{ display:"flex", gap:"10px"}}>
      <img src={card} style={{ width: "70px" }} alt="Card Icon" />
      <span style={{ Color:"#000", fontSize: "70px" }}>
        MYR
      </span>
    </div>
    <div style={{ 
    display: "flex", 
    alignItems: "flex-start", 
    justifyContent: "center",

  }}>
    <span style={{ fontSize: "30px", textAlign: "center" }}>
      منصة إلكترونية بتقدم خدمات متكاملة من أول توفير المنتج المناسب و التخزين إلى الشحن و التحصيل من <br/>العميل بكل سهوله من منزلك
    </span>
  </div>
  </div>
  
  <div className="d-flex gap-5 mx-auto my-5 text-center container   " style={{position:"relative",flexDirection:"row-reverse"}}>
    <div className="line" >

    </div>
    <div className="afterLine" style={{width:`${size*25}%`}}>

    </div>
    <div className="cardParent">

    {serviceData.map((el,index)=>{
      return <>
      <div className="cardDetails" onMouseEnter={()=>{
        setSize((index+1) )
        console.log("mouse downed")
      }} onMouseLeave={()=>{
        setSize(0)
      }}>
        <div className="ball"></div>
        <div className="content">
        <h1>{el.title}</h1>
        <p>{el.description}</p>
        </div>
          <img  src={el.image} alt="card iamge" width={80} />
        </div>
      </>
    })}
    </div>
  </div>

</section>
  )
}
