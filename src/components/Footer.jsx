import logo from "../assets/logo.svg"
import googlePlay from "../assets/google-play.png"
import appStore from "../assets/app-store.png"
import instagram  from "../assets/instagram.png"
import Whatsapp from "../assets/whatsapp.png"
import Facebook  from "../assets/facebook.png"


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
            <p>تواصل معنا </p>
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
