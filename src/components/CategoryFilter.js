import React from "react";

function CategoryFilter({handleClick, activeButton, categories}) {
  


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button
        key={category}
        className={`${activeButton === category ? 'selected' : ''}`}
        onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
      
    </div>
  );
}

export default CategoryFilter;
