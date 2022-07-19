import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <div className="container flex-wrap flex justify-center">
      {menuData.map((curElem) => {
        return (
          <div className="my-3 mx-3">
            <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800">
              <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                  {/* <a
                    rel="noopener noreferrer"
                    href="#"
                    className="mb-0 capitalize text-fuchsia-600 border-solid border-fuchsia-600 border-2 px-3 py-1 rounded-full font-semibold"
                  >
                    {curElem.id}
                  </a> */}
                </div>
                <a  rel="noopener noreferrer" href="#">
                  See All
                </a>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <img
                    src={curElem.image}
                    alt=""
                    className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
                  />
                  
                </div>
                <div className="space-y-2">
                  <a rel="noopener noreferrer" href="#" className="flex justify-center">
                    <h3 className="text-xl font-semibold text-fuchsia-600 ">
                    {curElem.name}
                    </h3>
                  </a>
                  <p className="leading-snug text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Repellat, excepturi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCard;
