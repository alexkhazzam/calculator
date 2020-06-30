import { inputField, stringOfInputs } from "../Components/State.js";
import { showCalc } from "../Components/State.js";

export class PerformCalculation {
  calculate() {
    if (inputField.value === "") {
      throw new Error(alert("Invalid inputs...Cannot perform calculation"));
    } else {
      let answer;
      let text = "";
      stringOfInputs.forEach((element) => {
        parseInt(element);
        text += element;
      });
      showCalc.value = text;
      inputField.value = "";
      inputField.value = answer;

      inputField.value = eval(stringOfInputs.join(""));
      console.log(eval(stringOfInputs.join("")));
    }
  }
}
