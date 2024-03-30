import { RiWhatsappFill } from "react-icons/ri";
import Flag from "../assets/Flag.png";
import ShopIcon from "../assets/ShopIcon.svg";
import logo from "../assets/logo.svg";
import { useEffect } from 'react';
import handleScroll from "../utils/scrollHandler";
import "../styles/navbar.css"

const Navbar = () => {
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <div style={{userSelect: "none"}}>
        <div className="list-wrapper" style={{background: "#f7f6f4", color: "#506889", display: "flex", justifyContent: "space-between", height: "65px"}}>
            <ul className="list" style={{display: "flex", gap: "40px", alignItems: "center", marginLeft: "50px", fontSize: "13px", fontWeight: "500"}}>
                <li style={{listStyleType: "none"}}><a href="" style={{textDecoration: "none", color: "#506889"}}>Cost Calculator</a></li>
                <li style={{listStyleType: "none"}}><a href="" style={{textDecoration: "none", color: "#506889"}}>Discover Stores</a></li>
                <li style={{listStyleType: "none"}}><a href="" style={{textDecoration: "none", color: "#506889"}}>Track Orders</a></li>
            </ul>

            <div className="helpCall" style={{display: "flex", alignItems: "center", marginRight: "75px"}}>
                <p className="needhelp" style={{fontSize: "13px", fontWeight: "500", marginRight: "80px"}}>Need Help? Call:<a href="" style={{textDecoration: "none", color: "#1da2f2"}}>+2342013306047</a></p>
                <div style={{display: "flex", gap: "65px"}}>

                    <a className="whatsappLogo" style={{color: "green", marginTop: "5px"}}>
                        <RiWhatsappFill  style={{fontSize: "30px"}}/>
                    </a>  

                    <div className="nigeriaFlagContainer" style={{fontSize: "13px", fontWeight: "500",  border: "1px solid #ccc", padding: "10px", borderRadius: "30px",  marginRight: "-20px", display: "flex"}}>
                        <div>
                            <img style={{width: "18px", marginRight: "8px"}} src={Flag} />
                        </div>
                        <div>
                            <p> Nigeria</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="navbar" id="navbar" style={{margin: "auto"}}>
            <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <a href="" style={{margin: "25px 0px 10px 52px"}}><img src={logo} alt="" id="printivologo" style={{width: "9rem"}} /></a>
                <ul className="printivo-list" style={{display: "flex", listStyleType: "none", margin: "25px 0px 10px 0px", gap: "26px"}}>
                    <li className="list"><a href="" style={{textDecoration: "none", color: "#3c4d64", fontSize: "14px", fontWeight: "500"}}>All Products</a></li>
                    <li className="list"><a href=""  style={{textDecoration: "none", color: "#3c4d64", fontSize: "14px", fontWeight: "500"}}>Become a Reseller</a></li>
                    <li className="list"><a href=""  style={{textDecoration: "none", color: "#3c4d64", fontSize: "14px", fontWeight: "500"}}>Merch Store</a></li>
                    <li className="list"><a href=""  style={{textDecoration: "none", color: "#3c4d64", fontSize: "14px", fontWeight: "500"}}>Marketplace</a></li>
                    <li><a href=""  style={{textDecoration: "none", color: "#d88384", fontSize: "14px", fontWeight: "500"}}>Sign in</a></li>
                    <li className="list"><a href=""  style={{textDecoration: "none", color: "#3c4d64", fontSize: "14px", fontWeight: "500"}}>Create Account</a></li>
                    <a href="" style={{margin: "-6px 50px 0px 0px"}}><img src={ShopIcon} alt="" /></a>
                </ul>
            </nav>
            <div className="searchWrapper">
                    <button className="searchBtn" id="searchBtn">Menu</button>
                    <input type="text" placeholder="Quick Search" id="searchInput" autoComplete="off"/>
            </div>
        </div>
    </div>
  )
}

export default Navbar