import googlePlay from "../assets/google-play.png"
import appStore from "../assets/app-store.png"
import appScreen from "../assets/app-screen.png"
const Contact = () => {
  return (
    <section className='contact'>
      <div className="sectionHeading">
    <h1>تقدر تحمل التطبيق الخاص بينا
    </h1>
      </div>
      <div className="content">
        <div className="up">
            <img src={googlePlay} alt="" />
            <img src={appStore} alt="" />
        </div>
        <div className="down">
            <img src={appScreen} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Contact
