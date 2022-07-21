import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <div className="container flex-wrap flex justify-center">
      {menuData.map((curElem) => {
        const { id, name, category, image, description } = curElem;

        return (
          <div className="my-3 mx-3">
            <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800 border-solid border-2 border-yellow-50 rounded-xl">
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
                <a rel="noopener noreferrer" href="#">
                  {category}
                </a>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <img
                    src={image}
                    alt=""
                    className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex justify-center"
                  >
                    <h3 className="text-xl font-semibold text-fuchsia-600 ">
                      {name}
                    </h3>
                  </a>
                  <p className="leading-snug text-gray-600">
                    {description}
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
