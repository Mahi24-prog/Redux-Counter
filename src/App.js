import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "./Actions/index";

export default function App() {
  const counter = useSelector((state) => state.CountReducer);
  const dispatch = useDispatch();
  const { counterActions } = allActions;
  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <button onClick={() => dispatch(counterActions.DecCounter(1))}>-</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(counterActions.IncCounter(10))}>+</button>
    </div>
  );
}
