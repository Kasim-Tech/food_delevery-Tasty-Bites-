import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Our Menu For You..</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => (
          (category === "All" || category === item.category) && (
            <FoodItem
              key={index}
              image={item.image}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
