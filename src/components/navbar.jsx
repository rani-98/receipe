import React, { useState } from 'react';

function NavBar() {
  const [currentPage, setCurrentPage] = useState("Home");
  const pageStyle = "cursor-pointer border-b-4 border-indigo-300";
  const pointer = "cursor-pointer";

  function handleClick(page) {
    setCurrentPage(page);
  }

  const homeClick = () => {
    handleClick("Home");
    if (currentPage !== "Home") {
      window.location.reload();
    }
  }

  const recipesClick = () => {
    handleClick("Recipes");
  }

  console.log("Rendered NavBar");

  return (
    <div className="flex  p-4 w-full">
      <ul className="flex justify-center gap-2 w-full">
        <button className={currentPage === "Home" ? pageStyle : pointer} onClick={homeClick}>Home</button>
        <button className={currentPage === "Recipes" ? pageStyle : pointer} onClick={recipesClick}>Recipes</button>
      </ul>
    </div>
  );
}

export default NavBar;