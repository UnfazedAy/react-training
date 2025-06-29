import { Provider } from "react-redux";
import Counter from "./components/counter/Counter";
import store from "./redux/index";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Counter />
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
