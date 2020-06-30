import { ClearInputs } from "./Components/ClearInputs.js";
import { DeleteElement } from "./Components/DeleteElement.js";
import { PerformCalculation } from "./App/PerformCalculation.js";
import { buttons, inputField, stringOfInputs } from "./Components/State.js";

class App {
  clear(id) {
    let clearInputs = new ClearInputs();
    clearInputs.clear(id);
  }
  deleteIndex() {
    const deleteElement = new DeleteElement();
    deleteElement.delete();
  }
  performCalc() {
    const performCalculation = new PerformCalculation();
    performCalculation.calculate();
  }
  notCoreOperations(id) {
    const performAdvancedCalculations = new PerformCalculation();
    performAdvancedCalculations.perform(id);
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    inputField.placeholder = "";
    if (button.id === "C") {
      const app = new App();
      app.clear(button.id);
    } else if (button.id === "X") {
      const app = new App();
      app.deleteIndex();
    } else if (button.id === "=") {
      const app = new App();
      app.performCalc();
    } else {
      inputField.value += `${button.id}`;
      stringOfInputs.push(button.id);
    }
  });
});
