import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Bootstrap from "./Bootstrap/Bootstrap";

function App() {
  const [count, setCount] = useState(0);

  // $(function () {
  //   $('[data-bs-toggle="popover"]').popover();
  // });

  // $(function () {
  //   $("#example").popover({
  //     html: true,
  //     title: "Popover",
  //     content:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, numquam?",
  //     placement: "bottom",
  //   });

  //   $("#showbtn").click(function () {
  //     $("#example").popover("toggle");
  //   });
  //   $("#hidebtn").click(function () {
  //     $("#example").popover("hide");
  //   });
  //   $("#example").on("show.bs.popover", function () {
  //     alert("Show ");
  //   });
  //   $("#example").on("shown.bs.popover", function () {
  //     alert("Shown ");
  //   });
  //   $("#example").on("hide.bs.popover", function () {
  //     alert("Hide ");
  //   });
  //   $("#example").on("hidden.bs.popover", function () {
  //     alert("hidden ");
  //   });
  //   // $("#example").on("hidde.bs.popover", function () {
  //   //   alert("hidden ");
  //   // });
  // });

  return <Bootstrap />;
}

export default App;
