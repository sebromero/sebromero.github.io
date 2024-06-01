'use client';

import About from "@/components/about";
import Sidebar from "@/components/sidebar/Sidebar";
import dynamic from 'next/dynamic'
// import Project from "@/public/projects/ai-insect-trap/project.mdx";


// Disallowed in client mode
// export const metadata = {
//   title: "About || Tokyo - Personal Portfolio React Nextjs Template",
// };
const index = ({ params }) => {
  const Project = dynamic(() => import("@/public/projects/" + params.project + "/project.mdx"));
  return (
    <>
      {/* End page title for seo */}

      <Sidebar />
      {/* END LEFT MENU CONTENT */}

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div data-aos="fade-right" data-aos-duration="1200">            
              <p>Project: {params.project}</p>
              <p>Title: {Project.frontmatter?.title}</p>
              {/* <About /> */}
              <Project />
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default index;
