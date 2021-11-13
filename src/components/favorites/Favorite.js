import React from "react";
import "./favorite.css";
import { useStateContext } from "../../context/StateContextProvider";
import { Link } from "react-router-dom";

export const Favorite = () => {
  const { state } = useStateContext();
  return (
    <>
      <div className="nav">
        <Link to="/" className="link-title">
          PhoneReview
        </Link>
      </div>
      <h2 className="fav"> Your Favorite : </h2>
      <div className="wrapp-favorites">
        {state.favorites.favItems.length === 0 ? (
          <p>your favorite is empty.</p>
        ) : (
          state?.favorites.favItems.map((result, index) => (
            <div className="card-favorites" key={index}>
              <img src={result.image} alt="images-favorites" />
              <h3>{result.phone_name}</h3>
              <p>{result.brand}</p>
              <Link to={`/phone/${result.slug}`} className="link-favorites">
                <span>View product</span>
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
};
