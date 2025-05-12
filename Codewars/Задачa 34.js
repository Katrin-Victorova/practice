// Reverse every other world in the string
const reverse = (str) => 
  str
     .trim()
     .split(" ")
     .map((el, i) => i % 2 
     ? el
       .split("")
       .reverse()
       .join("") 
       : el )
     .join(" ");

// function reverse(str) {
//     return str
//     .trim()
//     .split(" ")
//     .map((el, i) => {
//         return i % 2
//         ? el.split("").reverse().join("")
//         : el;
//         })
//         .join(" ");
// }


console.log(reverse("I really dont like strings!"))