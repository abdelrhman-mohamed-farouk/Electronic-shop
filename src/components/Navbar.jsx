import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";
import toast from "react-hot-toast";
export default function Navbar() {
  const userData = localStorage.getItem("Account") ||false;
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("Account")
    toast.success("Successful logout")
    navigate("/")
  }
  return (
    <div
      className=" container  d-flex flex-nowrap justify-content-between align-items-center py-5  w-100% "
      style={{ width: "100%" }}
    >
      <div className="navitmes d-flex gap-4  align-items-center flex-column flex-md-row ">
        {userData ?  <Link
        to={"/login"}
        onClick={handleLogout}
          className="text-decoration-none px-5 py-2 rounded-5"
          style={{ color: "rgb(255 0 110)" ,background:"rgb(255 0 0/0.1)"} }
        >
          تسجيل الخروج{" "}
        </Link>: <Link
        to={"/login"}
          className="text-decoration-none px-5 py-2 rounded-5"
          style={{ color: "rgb(5 185 110)" ,background:"rgb(5 185 110/0.1)"} }
        >
          تسجيل دخول{" "}
        </Link>}
       
        {!userData && <Link
        to={"/register"}
          className="text-decoration-none py-2 "
          style={{ color: "rgb(5 185 110)" }}
        >
          انشاء حساب جديد
        </Link>}
      </div>
      <div className="logo">
        <Link to={"/"}>        <img src={logoImg} width={100} />
        </Link>
      </div>
    </div>
  );
}
