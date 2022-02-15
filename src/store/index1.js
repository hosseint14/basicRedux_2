import { createStore } from "redux";

const initialValues = { counter: 0, showCounter: true };

const counterReducer = (state = initialValues, action) => {
  switch (action.type) {
    case "INC":
      return {
        counter: state.counter + action.value,
        showCounter: state.showCounter,
      };
      break;

    case "DEC":
      return {
        counter: state.counter - action.value,
        showCounter: state.showCounter,
      };
      break;

    case "reset":
      return {
        counter: 0,
        showCounter: state.showCounter,
      };
      break;

    case "showCounter":
      return { counter: state.counter, showCounter: !state.showCounter };
      break;

    default:
      return state;
      break;
  }
};
const store = createStore(counterReducer);

export default store;
