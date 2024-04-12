import React from "react";
import Link from "next/link";
const NavBar = () => {
  const menuList = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Event", link: "/event" },
    { id: 4, name: "Blog", link: "/blog" },
  ];
  return (
    <div className="flex w-full h-[8vh] bg-white font-sans">
      <div className="flex flex-row justify-between w-4/5 m-auto  align-middle text-center justify-items-center  ">
        <h3 className="text-green-900 font-medium">Logo</h3>
        <div className="flex w-1/2 justify-between">
          {menuList.map((item) => (
            <div key={item.id}>
              <Link href={item.link}>
                {" "}
                <h3 className="text-green-900 font-medium">{item.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
