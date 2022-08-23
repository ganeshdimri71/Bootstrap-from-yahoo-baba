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
    console.log("hello");
    $(function () {
      $("#newBtn").click(function () {
        $("#newCollapse").collapse("toggle");
      });
      $("#closeBtn").click(function () {
        $("#newCollapse").collapse("hide");
      });
    });
    $(function () {
      $("#myTab a").on("click", function (e) {
        e.preventDefault();
        $(this).tab("show");
      });
    });
    $(function () {
      $(".carousel").carousel({
        // interval: 2000,
        wrap: false,
      });

      $("#nextBtn").click(function () {
        $("#carouselExampleSlidesOnly").carousel("next");
      });

      $("#prevBtn").click(function () {
        $("#carouselExampleSlidesOnly").carousel("prev");
      });
      $("#prevBtn").click(function () {
        $("#carouselExampleSlidesOnly").carousel("pause");
      });
      $("#prevBtn").click(function () {
        $("#carouselExampleSlidesOnly").carousel("cycle");
      });
      $("#oneBtn").click(function () {
        $("#carouselExampleSlidesOnly").carousel(0);
      });
      $("#twoBtn").click(function () {
        $("#carouselExampleSlidesOnly").carousel(1);
      });
      $("#threeBtn").click(function () {
        $("#carouselExampleSlidesOnly").carousel(2);
      });

      $("#carouselExampleSlidesOnly").on("slide.cs.carousel", function () {
        console.log("one");
      });
      $("#carouselExampleSlidesOnly").on("slide.cs.carousel", function () {
        console.log("one");
      });
    });
    $(function () {
      $(".toast").toast({
        delay: 3000,
        autohide: false,
        animation:false
      });
    });
    $(function () {
      $("#showBtn").click(function () {
        $("#myToast").toast("show");
      });
      $("#closeBtn").click(function () {
        $("#myToast").toast("hide");
      });
    });
  }, []);

  return <Bootstrap />;
}

export default App;
