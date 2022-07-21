import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar flex justify-center mb-5 my-8 ">
        <div className="btn-group sm:px-4 sm:space-x-8 bg-white">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item font-semibold text-fuchsia-800"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;