import React from "react";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import axios from "axios";

const App = () => {
  const [user, setUser] = React.useState({});

  const getData = async () => {
    try {
      const { data } = await axios.get("https://randomuser.me/api/");
      setUser(data.results[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser({});
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <Header user={user} />
      <Main {...user} getData={getData} />
    </div>
  );
};

export default App;
