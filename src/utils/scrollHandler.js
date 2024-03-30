const handleScroll = () => {
    if (window.scrollY > 160) {
      document.getElementById("navbar").classList.add("scrolled");
      document.getElementById("navbar").style.marginTop = "-16px";
      document.getElementById("navbar").style.maxWidth = "1500px";
      document.getElementById("searchInput").style.display = "block";
      document.getElementById("searchBtn").style.backgroundColor = "#d77f81";
      document.getElementById("searchBtn").style.color = "#fff";
    } else {
      document.getElementById("navbar").classList.remove("scrolled");
      document.getElementById("navbar").style.marginTop = "0px";
      document.getElementById("searchInput").style.display = "none";
      document.getElementById("searchBtn").style.backgroundColor = "#fff";
      document.getElementById("searchBtn").style.color = "#384a62";
    }
  };
  
  export default handleScroll;