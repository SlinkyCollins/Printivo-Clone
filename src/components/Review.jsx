import X from "../assets/x.svg"

const Review = () => {
    return (
        <>
            <div style={{ backgroundColor: "#edf6fd", padding: "20px" }}>
                <h1 style={{ color: "#384a62", fontFamily: "Times new roman, sans-serif", fontWeight: "700", margin: "50px 50px 25px 50px" }}>What Customers Say About Us 🙌🏾</h1>
                <div className="reviewChildWrapper" style={{ padding: "0px 50px 50px 50px", display: "flex", gap: "20px"}}>
                    <div className="reviewChild" style={{ backgroundColor: "#fff", width: "420px", padding: "10px", height: "180px", position: "relative", border: "1px solid rgb(229, 231, 235)", borderRadius: "5px" }}>
                        <div style={{position: "absolute", left: "15px", top: "18px"}}>
                            <img src={X} alt="" style={{width: "32px",  border: "1px solid rgb(229, 231, 235)", borderRadius: "50%", padding: "8px"}} />
                        </div>
                        <div style={{padding: "5px 10px 0px 50px"}}>
                            <h1 style={{ fontSize: "14px", color: "#384a75", fontWeight: "600", margin: "10px 0px 15px 0px"}}>Amina Ebele <a style={{color: "#33b1f6", cursor: "pointer"}}>@DeliciousAmina</a></h1>
                            <p style={{ fontSize: "14px", lineHeight: "22px", color: "#384a75" }}>I am now the unofficial <a style={{color: "#33b1f6", cursor: "pointer"}}>@Printivo</a> ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!</p>
                        </div>
                    </div>

                    <div className="reviewChild" style={{ backgroundColor: "#fff", width: "420px", padding: "10px", height: "180px", position: "relative", border: "1px solid rgb(229, 231, 235)", borderRadius: "5px" }}>
                        <div style={{position: "absolute", left: "15px", top: "18px"}}>
                            <img src={X} alt="" style={{width: "32px",  border: "1px solid rgb(229, 231, 235)", borderRadius: "50%", padding: "8px"}} />
                        </div>
                        <div style={{padding: "5px 10px 0px 50px"}}>
                            <h1 style={{ fontSize: "14px", color: "#384a75", fontWeight: "600", margin: "10px 0px 15px 0px" }}>Oluwatosin <a style={{color: "#33b1f6", cursor: "pointer"}}>@tosingirlfx</a></h1>
                            <p style={{fontSize: "14px", lineHeight: "22px", color: "#384a75" }}> <a style={{color: "#33b1f6", cursor: "pointer"}}>@Printivo</a> delivered my mugs in 24hrs. Thank you so much! It&apos;s nice doing business with you. More to come</p>
                        </div>
                    </div>

                    <div className="reviewChild" style={{ backgroundColor: "#fff", width: "420px", padding: "10px", height: "180px", position: "relative", border: "1px solid rgb(229, 231, 235)", borderRadius: "5px" }}>
                        <div style={{position: "absolute", left: "15px", top: "18px"}}>
                            <img src={X} alt="" style={{width: "32px",  border: "1px solid rgb(229, 231, 235)", borderRadius: "50%", padding: "8px"}} />
                        </div>
                        <div style={{padding: "5px 10px 0px 50px"}}>
                            <h1 style={{ fontSize: "14px", color: "#384a75", fontWeight: "600", margin: "10px 0px 15px 0px" }}>Oluwatosin <a style={{color: "#33b1f6", cursor: "pointer"}}>@olgablark</a></h1>
                            <p style={{ fontSize: "14px", lineHeight: "22px", color: "#384a75"  }}>These guys <a href="" style={{color: "#33b1f6", textDecoration: "none", cursor: "pointer"}}>@Printivo</a> are really awesome and affordable. Excellent customer service and delivery too. Thank you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review