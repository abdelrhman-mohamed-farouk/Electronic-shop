import logo from "../assets/logo.svg"
import googlePlay from "../assets/google-play.png"
import appStore from "../assets/app-store.png"
import instagram  from "../assets/instagram.png"
import Whatsapp from "../assets/whatsapp.png"
import Facebook  from "../assets/facebook.png"
import { Link } from "react-router-dom"


export default function Footer() {
  return (
    <section className="footer">
      <div className="up">
        <div className="upright">
        <img src={logo} />

        </div>
        <div className="upleft">
            <img src={googlePlay} alt="" />
            <img src={appStore} alt="" />
        </div>
      </div>
      <div className="center">
        <div className="textright">
            <p>ملاحظات عن الشحن</p>
            <Link to={"/contact"} style={{color:"white",textDecoration:"none"}}>تواصل معنا </Link>
            <p>الشروط والاحكام</p>
        </div>
        <div className="iconleft">
            <img src={instagram} alt="" />
            <img src={Whatsapp} alt="" />
            <img src={Facebook} alt="" />
        </div>
      </div>
      <hr />
      <div className="down">
        <h3>جميع الحقوق محفوظة لدى MYR GROUP</h3>
      </div>
    </section>
  )
}
