import axios from "axios";
import { useEffect, useReducer } from "react";
import PersonCard from "./PersonCard";
import { initialState, reducer } from "./reducer";

const UseReducerExample = () => {
  // const [person, setPerson] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { person, error, loading } = state;

  const getPerson = async () => {
    const url = "https://randomuser.me/api/";
    // setLoading(true);
    dispatch({ type: "START" });

    try {
      const { data } = await axios.get(url);
      // setPerson(data.results[0]);
      // setError("");
      dispatch({ type: "SUCCESS", payload: data.results[0] });
    } catch (error) {
      // setError("Person can not be fetched");
      // setPerson("");
      // console.log(error);
      dispatch({ type: "FAIL", payload: "Person can not be fetched" });
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  console.log(state);
  return (
    <div>
      <button disabled={loading} onClick={getPerson}>
        Get Person
      </button>
      <div>
        {error && <h1>{error}</h1>}
        {person && <PersonCard {...person} />}
      </div>
    </div>
  );
};

export default UseReducerExample;
