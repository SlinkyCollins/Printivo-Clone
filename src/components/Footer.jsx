import "../styles/footer.css";
import { SlSocialFacebook } from "react-icons/sl";
import { PiTwitterLogoLight } from "react-icons/pi";
import { FiLinkedin } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import paymentLogos from "../assets/payment.png";
import shippingLogos from "../assets/shipping.png";

const Footer = () => {
  return (
    <>
        <div className="footerWrapper" style={{background: "#384a62", color: "#fff", display: "flex", padding: "80px 50px 90px 50px", gap: "120px"}}>
            <div className="child special-child1" style={{display: "flex", flexDirection: "column"}}>
                <h1 style={{fontSize: "18px", fontWeight: "500", margin: "0px 0px 20px 0px"}}>Printivo</h1>
                <a href="">About Us</a>
                <a href="">Contact</a>
                <a href="">Track Order</a>
                <a href="">Printivo Promise</a>
                <a href="">Printivo Blog</a>
                <a href="">Career</a>
            </div>
            <div className="child special-child2" style={{display: "flex", flexDirection: "column"}}>
                <h1 style={{fontSize: "18px", fontWeight: "500", margin: "0px 0px 20px 0px"}}>Help and Information</h1>
                <a href="">Paper Quality</a>
                <a href="">Privacy Policy</a>
                <a href="">Terms and Conditions</a>    
                <a href="">Font Licenses</a>
                <a href="">Shipping and Delivery</a>
            </div>
            <div className="child special-child3" style={{display: "flex", flexDirection: "column"}}>
                <h1 style={{fontSize: "18px", fontWeight: "500", margin: "0px 0px 20px 0px"}}>Make Money</h1>
                <a href="">Refer a friend & earn N1,000</a>
                <a href="">Become a Reseller</a>
                <a href="">Sell your Designs</a>
                <a href="">Merch Store</a>
            </div>
            <div className="child special-child4">
                <div style={{margin: "0px 0px 22px 0px"}}>
                    <h1 style={{fontSize: "18px", fontWeight: "500", margin: "0px 0px 20px 0px"}}>Follow Us</h1>
                    <div style={{display: "flex", flexDirection: "row", gap: "18px"}}>
                        <div>
                            <a href=""><SlSocialFacebook style={{fontSize: "23px"}}/></a>
                        </div>
                        <div>
                            <a href=""><PiTwitterLogoLight style={{fontSize: "23px"}}/></a>
                        </div>
                        <div>
                            <a href=""><FiLinkedin style={{fontSize: "23px"}}/></a>
                        </div>
                        <div>
                            <a href=""><IoLogoInstagram style={{fontSize: "23px"}}/></a>
                        </div>
                    </div>
                </div>
                <div style={{margin: "0px 0px 20px 0px"}}>
                    <h1 style={{fontSize: "17px", fontWeight: "500", margin: "0px 0px 15px 0px"}}>Accepted Payments</h1>
                    <div>
                        <img src={paymentLogos} style={{width: "180px"}} />
                    </div>
                </div>
                <div>
                    <h1 style={{fontSize: "18px", fontWeight: "500", margin: "0px 0px 15px 0px"}}>Delivery</h1>
                    <div>
                        <img src={shippingLogos} style={{width: "180px"}} />
                    </div>
                </div>
            </div>
        </div>  
        <div style={{background: "#cbcac8", padding: "35px"}}>
            <p style={{textAlign: "center", color: "#384a62", fontSize: "16px"}}>Copyright © 2023 Printivo. All rights reserved.</p>
        </div> 
    </>
  )
}

export default Footer