import { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            onClick={() => {
              setReadMore(!readMore);
            }}
            className="info-btn"
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>

        <button
          className="delete-btn btn-block btn"
          typ="button"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
