import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaLocationArrow, FaMailBulk, FaPhone } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
// import emailjs from "emailjs"
import emailjs from "emailjs-com"
function ContactUs() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("donnneeeeeeeeeeeeee 1!!! ")
    emailjs.send(
      'service_bhasefj',    // Replace with your service ID
      'template_g3h1n9p',   // Replace with your template ID
      formData,
      'Td1-5v34XiJE3cmw_'        // Replace with your user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success("Email Send successfully")
      // alert('Message sent successfully!');
    }, (err) => {
      console.error('FAILED...', err);
      toast.error(err.message)
      // alert('Failed to send the message, please try again.');
    });
  };

  return (
    <section className="ContactUs">
      <div className="img">
        <div className="overlay"></div>
        <h1 className="title">Contact Us</h1>
        <div className="icon">
        <MdOutlineContactSupport />
        </div>
      </div>
      <div className="container">
        <div className="left">
          <h2>Let's talk with us</h2>
          <p>
            Questions, comments, or suggestions? Simply fill in the form and
            we’ll be in touch shortly.
          </p>
          <div className="icons">
            <FaLocationArrow />
            <p>Block 50 , Elmasaken , Helwan , Cairo</p>
          </div>
          <div className="icons">
            <FaPhone />
            <p>+201274481599</p>
          </div>
          <div className="icons" >
            <FaMailBulk />
            <p style={{maxWidth:"70%"}}>abdelrhman.mohamed18697@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <form>
            <div className="up">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Frist Name" />
              <input type="text"  placeholder="Last Name"/>
            </div>

            <div className="down">
              <input type="email" name="email" value={formData.email} onChange={handleChange}   placeholder="Email"/>
              <input type="number" placeholder="Phone "/>
              <textarea className="p-3" name="message" value={formData.message} onChange={handleChange} id="" placeholder="Your Message ..."></textarea>

              <button type="button" className="btn btn-outline-success" onClick={handleSubmit}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
