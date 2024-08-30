import HeroImg from "../assets/heroImg.svg";
import HeroImg2 from "../assets/عصفور.svg";
import egypt from "../assets/egypt.png"
import uae from "../assets/uae.png"
import kyt from "../assets/kyt.png"
import ksa from "../assets/ksa.png"
export default function Hero() {
  return (
    <section style={{ background: "#eee", padding: "120px 0" }}>
      <div className="container d-flex justify-content-between flex-column flex-md-row ">
        <div className="heroimg">
          <img src={HeroImg} className="w-100 " />
        </div>
        <div className="contenthero d-flex flex-column align-items-end gap-4">
            <div className="d-flex align-items-center gap-1 px-3 py-1 rounded-3  mt-4 mt-md-0" style={{background:"rgb(5 185 110/0.1)",width:"fit-content"}}>
                <span className="h6">MYR مش محتاج خبره علشان تبدء معانا</span>
                <img src={HeroImg2} style={{width:"30px"}} />
            </div>
           <h6 style={{fontSize:"5rem",direction:"rtl"}}>هنساعدك تبدأ تجارتك الإلكترونية</h6>
           <p className="" style={{direction:"rtl",fontSize:"22px",color:"#AAA"}}>هنساعدك تبدأ بكل سهولة وبدون خبرة . لأننا هنوفر لك منتجات متنوعة بأفضل سعر يضمن لك أكبر ربح</p>
           <button className="d-flex px-4 py-1 rounded-3 border-0 text-white " style={{background:"rgb(5 185 110)"}}><h3>ابدء معانا</h3></button>
           <div className="flags d-flex gap-2 flex-row-reverse align-items-center">
            <p className="mt-1">:متاح في</p>
                <img src={egypt}  style={{objectFit:"contain"}}/>
                <img src={uae}  style={{objectFit:"contain"}}/>
                <img src={kyt}  style={{objectFit:"contain"}}/>
                <img src={ksa}  style={{objectFit:"contain"}}/>
            </div>

        </div>
      </div>
    </section>
  );
}
