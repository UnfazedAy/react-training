import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/moviesSlice";
import styles from "../styles/Movies.module.css";
import Loading from "../components/Loading";
import { useNavigate } from "react-router";

const Movies = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { movieList, loading, error } = useSelector((state) => state.movies);

  const getRating = (rating) => {
    if (rating > 80) {
      return "green";
    } else if (rating >= 60) {
      return "orange";
    } else {
      return "red";
    }
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className={styles.mainWrapper}>
      {error && <h1>{error}</h1>}
      {loading && <Loading />}
      {!loading && (
        <div className={styles.moviesWrapper}>
          {movieList.map((movie, index) => {
            const { title, rt_score, image, id } = movie;
            return (
              <div onClick={() => navigate(`/${id}`)} key={index} className={styles.cardWrapper}>
                <img src={image} alt="Movie image" />
                <div className={styles.cardBottom}>
                  <h5>{title}</h5>
                  <span className={styles.exportedStyle} style={{backgroundColor: `${getRating(rt_score)}`}}>{rt_score}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Movies;
