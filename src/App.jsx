import { useEffect, useState } from "react";
import Bootstrap from "./Bootstrap/Bootstrap";

function App() {
  $(function () {
    $("#closebtn").click(function () {
      $("#redbox").alert("close");
    });
    $("#redbox").on("close.bs.alert", function () {
      alert("close");
    });
    $("#redbox").on("closed.bs.alert", function () {
      alert("closed");
    });
  });
  // $(function () {
  //   $("#myModal").modal({
  //     backdrop: 'static',
  //     keyboard:false
  //   });

  // });
  useEffect(() => {
    console.log('hello')
    $(function () {
      $("#newBtn").click(function () {
        $("#newCollapse").collapse("toggle");
      });
      $("#closeBtn").click(function () {
        $("#newCollapse").collapse("hide");
      });
    });
  },[]);

  return <Bootstrap />;
}

export default App;
