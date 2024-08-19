import Abstract from "./Abstract";
import ProjectInfo from "./ProjectInfo"
import { MDXContent } from "@/components/MDXContent";

import { getAllProjects, getProjectsPath, getProject } from "@/lib/projects"

const ProjectMain = async ({ id }) => {
    const { title, content, subtitle, date_end, abstract, title_image } = await getProject(id);
    return (
        <>
      <div className="container">
        <div className="tokyo_tm_about">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Project</span>
                <h3>{title}</h3>
              </div>
            </div>
          </div>
          {/* End title */}

          <Abstract title={subtitle} date={date_end} content={abstract} title_image={title_image} />
          <div className="tokyo_tm_short_info">
            <ProjectInfo />
          </div>
          {/* End personal info */}

          <div className="tokyo_tm_button" data-position="left">
            <a href="/img/cv.pdf" download>
              <span>Download CV</span>
            </a>
          </div>

          <article>
            <MDXContent source={content} />
          </article>

        </div>
      </div>
      {/* End .container */}

      {/* /ABOUT */}
    </>
    )
}      


export default ProjectMain