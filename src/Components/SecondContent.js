import React from "react";

const SecondContent = ({icons, heading, content }) => {
  return (
    <div>
      <p>{icons}</p>
      <h3 className="font-bold text-4xl py-2">{heading}</h3>
      <p>{content} </p>
    </div>
  );
};

export default SecondContent;
