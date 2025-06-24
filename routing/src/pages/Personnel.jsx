import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Personnel = () => {
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);

  const getPeopleData = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users", {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });
      setPeople(response.data.data);
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    getPeopleData();
  }, []);

  return (
    <div className="personnelWrapper">
      <h1>Personnel List</h1>
      <div className="cardWrapper">
        {people.map((person) => {
          const { id, first_name, last_name, avatar } = person;
          return (
            <div key={id} className="personnelCard">
              <img src={avatar} alt="img" />
              <p>
                {first_name} {last_name}
              </p>
              <button
                onClick={() => navigate(`/personnel/${id}`, { state: person })}
              >
                Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Personnel;
