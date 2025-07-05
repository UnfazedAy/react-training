import React from "react";
import { getMoviesDetail } from "../services/apiCalls";
import styles from "../styles/MovieDetail.module.css";
import { useLoaderData } from "react-router";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  const data = await getMoviesDetail(params.id);
  return data;
};

const MovieDetail = () => {
  const data = useLoaderData();
  const { title, rt_score, image, release_date, description } = data;
  return (
    <div className={styles.detailWrapper}>
      <h1>{title}</h1>
      <div className={styles.bottomWrapper}>
        <div className={styles.posterWrapper}>
          <img src={image} alt="Movie Image" />
        </div>
        <ul className={styles.ul}>
          <li>
            <span>Overview: </span>
            {description}
          </li>
          <li>
            <span>Name: </span>
            {title}
          </li>
          <li>
            <span>IMDB: </span>
            {rt_score}
          </li>
          <li>
            <span>Date: </span>
            {release_date}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;
