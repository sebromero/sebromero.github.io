import React from "react";

const ProjectInfo = ({ project }) => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Date",
          content: project.date_end,
        },
        {
          id: 2,
          name: "Categories",
          content: "32",
        },
        {
          id: 3,
          name: "Context",
          content: "Ave 11, New York, USA",
        },
        {
          id: 4,
          name: "Team",
          content: (
            <>
              <a href="mailto:tokyo@gmail.com">tokyo@gmail.com</a>
            </>
          ),
        }
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "USA",
        },
        {
          id: 2,
          name: "Study",
          content: "Univercity of Texas",
        },
        {
          id: 3,
          name: "Degree",
          content: "Master",
        },
        {
          id: 4,
          name: "Interest",
          content: "Playing Football",
        },
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectInfo;
