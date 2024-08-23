import React from "react";

const Abstract = ({title, tags, content, title_image}) => {
  return (
    <>
      <div className="top_author_image">
        <img src={title_image} alt={title} />
      </div>
      <div className="about_title">
        <h2>{title}</h2>
        {tags && (
          <ul className="tags">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="about_text">{content}</div>
    </>
  );
};

export default Abstract;
