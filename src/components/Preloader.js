import React  from "react";
import '../css/Preloader.css';

function PreLoader() {


function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

  return (
    <div className="preloader">
    </div>
  );
}

export default PreLoader;