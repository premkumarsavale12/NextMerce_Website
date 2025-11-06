import "../Offers/offers.css"

export default function Offers() {

    return (

        <>
            <div className="container">

                <div className="left">

                    <h1> Don't Miss Out Latest  <br /> Trends & Offers</h1>
                    <p> Register to receive news about the latest offers & discount codes</p>
                </div>

                <div className="right">

                    <input type="email"
                        placeholder="Enter Your  Email "
                    />

                    <button className="btn"> Subscrible</button>
                </div>

            </div>
        </>
    )
}

