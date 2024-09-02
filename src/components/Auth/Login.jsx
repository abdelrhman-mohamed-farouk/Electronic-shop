import React, { useEffect, useState } from "react";
import login from "../../assets/login_facebook.png"
import googleImg from "../../assets/google.png"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Login() {
    const [formData,setFormData] = useState({
        email:"",
        password:""
    })

    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Account")){
            navigate("/")
            toast.error("Already logged in")
        }
    },[])
    // hanlde login 
    const handleLogin =()=>{
        if(!formData?.email || !formData?.password){
            toast.error("All feilds are required")
        }
        else if(formData?.email && formData?.password){
            if(formData?.password.length < 8){
                toast.error("Password Length Must be more than 8")
            }else{
                const curData = JSON.parse(localStorage.getItem("Account"))
                
                if(curData?.email != formData?.email){
                        toast.error("Email not Found")
                        return;
                }else if(curData?.password != formData?.password){
                    toast.error("Password is Wrong"
                        
                    )
                    return;
                }else{

                    // store data in your api (local storage in this case )
                    
                    localStorage.setItem("Account",JSON.stringify({...formData}))
                    toast.success(`Login Successful , Hi ${curData.email}`)
                    navigate("/")
                    scrollTo(0,0)
                }
            }
        }else{
            toast.error("All feilds Are required ya m3lm")
        }
    }
  return (
    <div className=" login-container">
      <div className="up">
        <button>
            Login With Facebook
            <img src={login} alt="" />
        </button>
        <button>
            Login With Google
            <img src={googleImg} alt="" />
        </button>
        
      </div>
      <div className="center">
        <input type="text" value={formData.email} onChange={(e)=>{
            setFormData({...formData,email:e.target.value})
        }} placeholder="Enter Your Name" />
        <input type="password" value={formData.password} onChange={(e)=>{
            setFormData({...formData,password:e.target.value})
        }} placeholder="Enter Your Password" />
      </div>
      <div className="down">
        <button id="login"> 
            Register
        </button>
        <button id="register"  onClick={handleLogin} >
            Login
        </button>
      </div>
    </div>
  );
}

export default Login;
