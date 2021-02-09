// const el = document.querySelector(".item");

// let isResizing = false;
// const resizers = document.querySelectorAll(".resizer");
// 

// 
//   resizer.addEventListener("mousedown", mousedown);

//   function mousedown(e) {
//     
//     isResizing = true;

//     let prevX = e.clientX;
// 

//     window.addEventListener("mousemove", mousemove);
//     window.addEventListener("mouseup", mouseup);

//     function mousemove(e) {
//       const rect = el.getBoundingClientRect();

//       if (currentResizer.classList.contains("se")) {
//         el.style.width = rect.width - (prevX - e.clientX) + "px";
//        }

//       prevX = e.clientX;
//       
//     }

//     function mouseup() {
//       window.removeEventListener("mousemove", mousemove);
//       window.removeEventListener("mouseup", mouseup);
//       isResizing = false;
//     }
//   
// }
