import React from "react";

const NavBar = () => {
  const menuList = [
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Event" },
  ];
  return (
    <div className="flex w-full h-7">
      <div className="flex justify-between w-1/2 m-0 bg-slate-950">
        <h3>Logo</h3>
        <div>
          {menuList.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
