import { useEffect, useState } from "react";
import { getRandomMeal } from "../../url/axios";
import { Link } from "react-router-dom";
import "./Random.css";

const RandomMeal = () => {
  const [randomFood, setRandomFood] = useState({});

  useEffect(() => {
    getRandomMeal().then(({ data }) => {
      setRandomFood(data.meals[0]);
    });
  }, []);
  return (
    <>
      <div className="random">
        <div className="random__info">
          <h2 className="random__constant">Meal of the day</h2>
          <Link to={randomFood.idMeal} className="link">
            <p className="random__title">{randomFood.strMeal}</p>

            <p className="random__category">
              {randomFood.strCategory} | {randomFood.strArea}
            </p>
          </Link>
        </div>
        <div className="random-img">
          <Link to={randomFood.idMeal}>
            <img src={randomFood.strMealThumb} alt={randomFood.strMeal} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default RandomMeal;
