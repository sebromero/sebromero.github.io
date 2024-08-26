// 'use client';

// SEE: https://blog.kfirfitousi.com/posts/web-dev/mdx-nextjs-13

import Sidebar from "@/components/sidebar/Sidebar";
import { getAllProjects } from "@/lib/projects"
import Project from "@/components/project";

// Disallowed in client mode
// export const metadata = {
//   title: "About || Tokyo - Personal Portfolio React Nextjs Template",
// };
const Page = ({ params }) => {
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
              {/* <About /> */}
              <Project id={params.id} />
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

// Allows to generate static pages for all projects
async function generateStaticParams() {
  return getAllProjects().map((project) => {
    return { id: project.slug }
  });
}

export default Page;
export { generateStaticParams };