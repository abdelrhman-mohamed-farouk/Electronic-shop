import sub from "../assets/sub.svg"

function ShowAll() {
  return (
    <section className='showall'>
        <div className="content">
            <div className="text">
                <h3>سجل دلوقتي علشان تشوف كل المنتجات
                </h3>
                <button>سجل الان</button>
            </div>
            <div className="img">
                <img src={sub} alt="" />
            </div>
        </div>
    </section>
  )
}

export default ShowAll
