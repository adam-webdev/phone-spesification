import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./brand.css";
import Navbar from "./../navbar/Navbar";
import { useStateContext } from "../../context/StateContextProvider";
import Swal from "sweetalert";

const Brands = () => {
  const { getBrands, loading, searchInput, results, state, dispatch } =
    useStateContext();

  useEffect(() => {
    if (searchInput !== "") {
      getBrands(searchInput);
    }
  }, [searchInput]);

  const handleFav = (result) => {
    // const data = {
    //   image: result.image,
    //   phone: result.phone_name,
    //   brand: result.brand,
    //   slug: result.slug,
    // };
    dispatch({ type: "ADD_FAVORITES", payload: { ...result } });
    Swal({ title: "success added to favorites", icon: "success" });
    // localStorage.setItem("favItems", JSON.stringify(data));
    console.log("result" + result.slug);
  };
  console.log(state);
  // console.log(results);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container-brand">
      {results?.data?.phones?.map((result, index) => (
        <div className="card-brand" key={index}>
          <img src={result.image} alt="img-brand" />
          <h3>{result.phone_name}</h3>
          <p>{result.brand}</p>
          <Link to={`/phone/${result.slug}`} className="link-brand">
            <span>View product</span>
          </Link>
          <div className="fav" onClick={() => handleFav(result)}>
            Add To Favorites
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brands;