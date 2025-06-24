import React from "react";

export default function Language({ name, img, options }) {
  const [show, setShow] = React.useState(true);
  console.log(show);

  return (
    <div className="cardWrapper" onClick={() => setShow(!show)}>
      {show && (
        <div className="cardBottom">
          <img src={img} alt="lang" className="langImg" />
          <h3>{name}</h3>
        </div>
      )}

      {!show && (
        <ul>
          {options.map((option, index) => (
            <li key={index} className={show ? "show" : "hide"}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
