import { BiHealth } from "react-icons/bi";
import { MdLocalOffer, MdSelfImprovement } from "react-icons/md";

function Service() {
  return (
    <section className="service">
      <div className="sectionHeading">
        <h1>اقسام ومنتجات متنوعة</h1>
      </div>
    <div className="content animate__animated  animate__infinite animate__slideInRight">
    <div className="silder">
        <div>
          <h3>عروض الصحه والجمال</h3>
           <p>
          <BiHealth />

          </p>
        </div>
      </div>{" "}
      <div className="silder">
        <div>
          <h3> عنايه شخصيه</h3>
           <p>
          <MdSelfImprovement />

          </p>
        </div>
      </div>
      <div className="silder">
        <div>
          <h3> عروض رمضان</h3>
           <p>
          <MdLocalOffer />

          </p>
        </div>
      </div>
    </div>

    <div className="content animate__animated  animate__infinite animate__slideInLeft">
    <div className="silder">
        <div>
          <h3>عروض الصحه والجمال</h3>
           <p>
          <BiHealth />

          </p>
        </div>
      </div>{" "}
      <div className="silder">
        <div>
          <h3> عروض رمضان</h3>
           <p>
          <MdLocalOffer />

          </p>
        </div>
      </div>
      <div className="silder">
        <div>
          <h3> عنايه شخصيه</h3>
           <p>
          <MdSelfImprovement />

          </p>
        </div>
      </div>
    </div>

    </section>
  );
}

export default Service;
