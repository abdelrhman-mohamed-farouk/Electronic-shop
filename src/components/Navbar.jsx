import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
export default function Navbar() {
  return (
    <div
      className=" container  d-flex flex-nowrap justify-content-between align-items-center py-5  w-100% "
      style={{ width: "100%" }}
    >
      <div className="navitmes d-flex gap-4  align-items-center flex-column flex-md-row ">
        <Link
          className="text-decoration-none px-5 py-2 rounded-5"
          style={{ color: "rgb(5 185 110)" ,background:"rgb(5 185 110/0.1)"} }
        >
          تسجيل دخول{" "}
        </Link>
        <Link
          className="text-decoration-none py-2 "
          style={{ color: "rgb(5 185 110)" }}
        >
          انشاء حساب جديد
        </Link>
      </div>
      <div className="logo">
        <img src={logoImg} width={100} />
      </div>
    </div>
  );
}
