import People from "./people";
import _ from "lodash";
function component() {
  const Jim = new People("Jim");
  console.log(32221);
  Jim.sayName();
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  console.log(Jim);
  return element;
}
let comp = component();
document.body.appendChild(comp);
if (module.hot) {
  module.hot.accept("./people", function () {
    console.log("Accepting the updated people module!");
    let comp = component();
    document.body.appendChild(comp);
  });
}
