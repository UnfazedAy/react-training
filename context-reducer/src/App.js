import Counter from "./components/Counter";
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <CounterProvider>
        <Counter />
    </CounterProvider>
  );
}

export default App;
