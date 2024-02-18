import { supabase } from "../config/supabaseClient";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const BurgerCard = ({ food, onDelete }) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from("foods")
      .delete()
      .eq("id", food.id);

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      onDelete(food.id);
    }
  };

  return (
    <div className="food-card">
      <h3>{food.title}</h3>
      <p>{food.Ingredients}</p>
      <div className="rating">{food.rating}</div>
      <div className="buttons">
        <Link to={"/" + food.id}>
          <i className="material-icons">edit</i>
        </Link>
        <i className="material-icons" onClick={handleDelete}>
          delete
        </i>
      </div>
    </div>
  );
};

export default BurgerCard;
