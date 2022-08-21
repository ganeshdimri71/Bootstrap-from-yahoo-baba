import React, { useEffect, useRef } from "react";
// const popoverTriggerList = document.querySelectorAll(
//   '[data-bs-toggle="popover"]'
// );
// const popoverList = [...popoverTriggerList].map(
//   (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
// );
function Bootstrap() {
  const popoverRef = useRef();
  useEffect(() => {
    var popover = new bootstrap.Popover(popoverRef.current, {
      content: "Hello popover content!",
      title: "My Popover",
    });
  });

  return (
    <div className="p-4">
      <button className="btn btn-lg btn-danger" ref={popoverRef}>
        Click to toggle popover
      </button>
    </div>
  );
}

export default Bootstrap;
