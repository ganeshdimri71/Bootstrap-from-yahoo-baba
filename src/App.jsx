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

  return <Bootstrap />;
}

export default App;
