import { useState } from "react";
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
  $(function () {
    $("#showBtn").click(function () {
      $("#myModal").modal("show");
    });
    $("#closeModal").click(function () {
      $("#myModal").modal("hide");
    });
    $("#myModal").on("shown.bs.modal", function () {
      alert(`Shown`);
    });
    $("#myModal").on("show.bs.modal", function () {
      alert(`Show`);
    });
    $("#myModal").on("hide.bs.modal", function () {
      alert(`Hide`);
    $("#myModal").on("hidePrevented.bs.modal", function () {
      alert(`Hide`);
    });
  });

  return <Bootstrap />;
}

export default App;
