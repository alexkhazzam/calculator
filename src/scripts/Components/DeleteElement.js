import { inputField, stringOfInputs } from "../Components/State.js";

export class DeleteElement {
  delete() {
    let val = inputField.value.slice(0, stringOfInputs.length - 1);
    inputField.value = val;
    stringOfInputs.pop();
  }
}
