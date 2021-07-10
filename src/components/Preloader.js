import React, { useEffect, useState } from "react";
import '../css/Preloader.css';

function PreLoader() {
  var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

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