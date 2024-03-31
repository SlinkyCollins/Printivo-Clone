import logoGroup from "../assets/Logo Group.png"

const Logo = () => {
  return (
    <>
        <div className="logoWrapper" style={{margin: "100px 50px 50px 50px"}}>
            <h1 style={{fontFamily: "Times new roman", fontSize: "33px", color: "#384a62", margin: "0px 0px 10px"}}>Nigeria&rsquo;s No. 1 online print shop 👑</h1>
            <p style={{fontSize: "19px", color: "#506683", fontWeight: "500", wordSpacing: "1px"}}>Our print services and    solutions are trusted by these brands and  <br /> over 15,000 other businesses in Nigeria.</p>
            <img src={logoGroup} className="logoGroup" style={{width: "73rem", objectFit: "cover", margin: "30px 0px 30px"}}/>
        </div>
    </>
  )
}

export default Logo