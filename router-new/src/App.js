import { useEffect } from "react";
import { getAllUser, getSelectedUser } from "./services/apiUsers";

function App() {
  useEffect(() => {
    getAllUser();
    getSelectedUser(1)
  }, []);
  return <div>App</div>;
}

export default App;
