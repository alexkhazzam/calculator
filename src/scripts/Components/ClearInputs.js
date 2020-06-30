import { inputField, stringOfInputs, showCalc } from "./State.js";

export class ClearInputs {
  clear() {
    inputField.value = "";
    showCalc.value = "";
    stringOfInputs.length = 0;
  }
}
