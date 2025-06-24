import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NotFound from "./NotFound";

const PersonnelDetail = () => {
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const getPerson = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`https://reqres.in/api/users/${id}`, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });

      setPerson(response.data.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPerson();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Show loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show NotFound component if there's a 404 error
  if (error && error.response?.status === 404) {
    return <NotFound />;
  }

  return (
    <div className="personWrapper">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>
      <img src={person?.avatar} alt="img" />
      <p>{person?.email}</p>
      <div className="btnWrapper">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default PersonnelDetail;