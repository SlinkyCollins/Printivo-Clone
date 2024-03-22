import affordIcon from "../assets/affordable.svg";
import fastIcon from "../assets/fastsvg.svg";
import qualityIcon from "../assets/topquality.svg";

const Feature = () => {
    return (
        <>
            <div style={{margin: "100px 50px 100px 60px"}}>
                <h1 style={{color: "#384a62", fontFamily: "Times new roman, sans-serif", margin: "0px 0px 20px"}}>You can count on us for:</h1>
                <div style={{display: "flex"}}>
                    <div style={{display: "flex"}}>
                        <div style={{margin: "0px 10px 0px 0px"}}>
                            <img src={fastIcon} />
                        </div>
                        <div >
                            <h1 style={{color: "#445971", fontSize: "15px", fontWeight: "600", margin: "0px 0px 8px"}}>Fast Turnaround Within Days</h1>
                            <p style={{color: "#7b9cc0", fontSize: "15px", width: "80%"}}>Your order gets to you within 3-7 working days via DHL or our very own Printivo Direct.</p>
                        </div>
                    </div>
                    <div style={{display: "flex"}}>
                        <div style={{margin: "0px 10px 0px 0px"}}>
                            <img src={affordIcon} />
                        </div>
                        <div>
                            <h1 style={{color: "#445971", fontSize: "15px", fontWeight: "600", margin: "0px 0px 8px"}}>100% Top Quality</h1>
                            <p style={{color: "#7b9cc0", fontSize: "15px", width: "80%"}}>Only the finest materials, machines and people will be involved in fulfilling your order.</p>
                        </div>
                    </div>
                    <div style={{display: "flex"}}>
                        <div style={{margin: "0px 10px 0px 0px"}}>
                            <img src={qualityIcon} />
                        </div>
                        <div>
                            <h1 style={{color: "#445971", fontSize: "15px", fontWeight: "600", margin: "0px 0px 8px"}}>Affordable Services</h1>
                            <p style={{color: "#7b9cc0", fontSize: "15px", width: "80%"}}>All products are adequately priced to ensure you get value for your money at all times.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feature