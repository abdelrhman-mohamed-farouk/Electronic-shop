import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password:""
  });
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!formData.email || !formData.name||!formData.password ||!formData.phone){
      toast.error("All feilds are required")
      return;
    }
    if(formData.password.length < 8){

      toast.error("Password length must be at least 8 chars")
      return
    } 
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return toast.error("invalid email")
    
    else{
      // store data in your api (localstorage in this case )
      localStorage.setItem("Account",JSON.stringify({
        ...formData
      }))

      toast.success("Successful Registeration")
      navigate("/login")
    }
    
  };

  return (
    <div className='registerForm'>
       <div className="right">
          <form>
            <div className="up">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder=" Name" />
            </div>

            <div className="down">
              <input type="email" name="email" value={formData.email} onChange={handleChange}   placeholder="Email"/>
              <input type="number" name='phone' onChange={handleChange} value={formData.phone} placeholder="Phone "/>
              <input type="password" name='password' onChange={handleChange} value={formData.password} placeholder="password "/>

              <button type="button" className="btn btn-success" onClick={handleSubmit}>Register</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Register
