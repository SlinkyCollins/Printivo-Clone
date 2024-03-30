import techPoint from "../assets/TechpointLogo.png";
import techCrunch from "../assets/techcrunchLogo.svg";
import forbes from "../assets/ForbesLogo.svg";
import techCabal from "../assets/techcabalLogo.svg";
import cnn from "../assets/cnnlogo.svg";

const Notices = () => {
    return (
        <div className="noticesAllWrapper" style={{background: "#f7f6f4", padding: "100px 0px 100px 50px"}}>
                <h1 style={{color: "#384a62", fontFamily: "Times new roman, sans-serif", margin: "0px 0px 35px"}}>Our amazing work got noticed by:</h1>
                <div className="noticesContainer" style={{display: "flex"}}>
                    <div style={{display: "flex", flexDirection: "column", margin: "0px 60px 0px 0px"}}>
                        <img src={techCrunch} style={{width: "200px", objectFit: "cover", margin: "0px 0px 12px"}}/>
                        <a href="" style={{color: "#384a62", fontWeight: "500", fontSize: "15px", textDecoration: "underline", textDecorationColor: "#384a62", textDecorationThickness: "1px"}}>Read the article here</a>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", margin: "0px 80px 0px 0px"}}>
                        <img src={forbes} style={{width: "120px", objectFit: "cover", margin: "0px 0px 12px"}}/>
                        <a href="" style={{color: "#384a62", fontWeight: "500", fontSize: "15px", textDecoration: "underline", textDecorationColor: "#384a62", textDecorationThickness: "1px"}}>Read the article here</a>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", margin: "0px 80px 0px 0px"}}>
                        <img src={techPoint} style={{width: "120px", objectFit: "cover", margin: "0px 0px 12px"}}/>
                        <a href="" style={{color: "#384a62", fontWeight: "500", fontSize: "15px", textDecoration: "underline", textDecorationColor: "#384a62", textDecorationThickness: "1px"}}>Read the article here</a>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", margin: "0px 80px 0px 0px"}}>
                        <img src={techCabal} style={{width: "150px", objectFit: "cover", margin: "0px 0px 12px"}}/>
                        <a href="" style={{color: "#384a62", fontWeight: "500", fontSize: "15px", textDecoration: "underline", textDecorationColor: "#384a62", textDecorationThickness: "1px"}}>Read the article here</a>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <img src={cnn} style={{width: "65px", objectFit: "cover", margin: "0px 0px 12px"}}/>
                        <a href="" style={{color: "#384a62", fontWeight: "500", fontSize: "15px", textDecoration: "underline", textDecorationColor: "#384a62", textDecorationThickness: "1px"}}>Read the article here</a>
                    </div>
                </div>
        </div>
    )
}

export default Notices