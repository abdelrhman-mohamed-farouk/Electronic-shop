import { useState } from "react";
import { user } from "../Data";
import man from "../assets/man-1.svg"
function Feedbacks() {
  const [userName,setUserName] = useState("Abdo")
  return (
    <section className="feedback">
      <div className="sectionHeading">
        <h1>كن واحد منهم </h1>
      </div>

      <div className="content">
        {/* user side  */}
       <div>
       {user.map((user,i)=>{
          return <>
            <div key={i} className={`userCard ${userName == user.name ? "active" : null}`}  onClick={()=> setUserName(user.name)}>
              <img src={man} alt="dsdsd" />
              <div className="text">
                <h1>{user.name}</h1>
                <p>{user.location}</p>
              </div>
            </div>
          </>
        })}
       </div>

       {/* user feedback  */}

       <div className="userFeedback">
        <p>بدايتي مع MYR هي بدايتي الحقيقة مع التجارة الإلكترونية، MYR بتوفر فرصة بيزنس الأحلام ريسك قليل، ربح كبير، سيولة نقدية في فترة قصيرة جداً

</p>
       </div>
      </div>
    </section>
  );
}

export default Feedbacks;
