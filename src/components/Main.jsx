import card from "../assets/card.png";
import SearchIcon from "../assets/SearchIcon.svg";

const Main = () => {
    return (
        <div style={{backgroundColor: "#ece8d9", margin: "auto", userSelect: "none" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>

                <div style={{ textAlign: "left", margin: "60px 0px 0px 50px" }}>
                    <h1 style={{ fontFamily: "dm serif display, serif", color: "#384a62", fontSize: "70px" }}>Quality Prints</h1>
                    <p style={{ color: "#708095", fontSize: "22px", fontWeight: "500", marginTop: "10px" }}>Shipped to your doorstep</p>
                    <p style={{ color: "#384a62", fontSize: "15px", fontWeight: "700", marginTop: "30px" }}>What would you like to print today?</p>
                    <div style={{ position: "relative", display: "flex", margin: "10px 0px" }}>
                        <input type="text" style={{ padding: "30px", border: "none", outline: "none", width: "620px", borderRadius: "5px", fontSize: "15px" }} placeholder="Search for Business cards, T-shirts, Mugs, etc" />
                        <a href=""><img src={SearchIcon} style={{ position: "absolute", right: "0", margin: "25px 20px 0px 0px" }} alt="" /></a>
                    </div>
                </div>

                <div>
                    <a href=""><img src={card} style={{ width: "430px", objectFit: "cover", margin: "100px 0px 0px 0px" }}  /></a>
                </div>
            </div>
        </div>
    )
}

export default Main