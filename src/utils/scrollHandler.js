const handleScroll = () => {
    if (window.scrollY > 160) {
      document.getElementById("navbar").classList.add("scrolled");
      document.getElementById("navbar").style.marginTop = "-16px";
    } else {
      document.getElementById("navbar").classList.remove("scrolled");
      document.getElementById("navbar").style.marginTop = "0px";
    }
  };
  
  export default handleScroll;