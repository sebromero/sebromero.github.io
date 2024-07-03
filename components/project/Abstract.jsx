import React from "react";

const Abstract = ({title, date, content, title_image}) => {
  return (
    <>
      <div className="top_author_image">
        <img src={title_image} alt={title} />
      </div>
      <div className="about_title">
        <h3>{title}</h3>
        <span>{date}</span>
      </div>
      <div className="about_text">{content}</div>
    </>
  );
};

export default Abstract;
