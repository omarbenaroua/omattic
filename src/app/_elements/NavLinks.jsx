import React from "react";

const NavLinks = (props) => {
  return (
    <>
      <li>
        <a
          className="text-secondary transition hover:text-gray-500/75"
          href={props.href}
        >
          {props.name}
        </a>
      </li>
    </>
  );
};

export default NavLinks;
