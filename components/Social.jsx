import React from "react";

const SocialShare = [
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/romeroseb/",
  },
  {
    iconName: "github",
    link: "https://github.com/sebromero",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
