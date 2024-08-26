import React from "react";

const ProjectInfo = ({ project }) => {
  const {date_start, date_end, context, team, source_code} = project;
  const data = [
    {
      name: "📅 Date",
      value: date_start && date_start !== date_end ? `${date_start} - ${date_end}` : date_end,
    },
    {
      name: "👀 Context",
      value: context,
    },
    {
      name: "🧑‍🤝‍🧑 Team",
      value: team,
    },
    {
      name: "🧑‍💻 Code",
      value: source_code && (
          <>
            <a href={source_code} target="_self" rel="noopener noreferrer">View</a>
          </>
      ),
    },
    {
      name: "📦 Assets",
      value: project.assets && (
          <>
            <a href={project.assets} target="_self" rel="noopener noreferrer">Download</a>
          </>
      ),
    }
  ];

  // Filter empty values
  const filteredData = data.filter((item) => item.value);

  // Add id to each item
  const dataWithId = filteredData.map((item, index) => {
    return {
      id: index,
      ...item,
    };
  });

  // First half of items should be on the left side
  // second half on the right side
  const leftData = dataWithId.slice(0, Math.ceil(dataWithId.length / 2));
  const rightData = dataWithId.slice(Math.ceil(dataWithId.length / 2));

  return (
    <>
      <div className="left">
        <div className="tokyo_tm_info">
          <ul>
            {leftData.map((item) => (
              <li key={item.id}>
                <span>{item.name}:</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="tokyo_tm_info">
          <ul>
            {rightData.map((item) => (
              <li key={item.id}>
                <span>{item.name}:</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );

};

export default ProjectInfo;
