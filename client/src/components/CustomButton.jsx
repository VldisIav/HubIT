import React from "react";
import { Link } from "react-router-dom";

const CustomButton = ({ title, containerStyles, iconRight, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className={`inline-flex items-center ${containerStyles}`}
    >
      <Link to='/user-auth'>
      {title}

      {iconRight && <div className='ml-2'>{iconRight}</div>}

      </Link>
    </button>
  );
};

export default CustomButton;
