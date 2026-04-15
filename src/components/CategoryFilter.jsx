import React from "react";
import "../style.css";

const CategoryFilter = ({ categories, selected, setSelected }) => {
  return (
    <div className="category-filter">

      {categories.map((cat) => (

        <button
          key={cat}
          className={`category-btn ${selected === cat ? "active" : ""}`}
          onClick={() => setSelected(cat)}
        >
          {cat}
        </button>

      ))}

    </div>
  );
};

export default CategoryFilter;