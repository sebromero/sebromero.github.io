// 'use client';

// SEE: https://blog.kfirfitousi.com/posts/web-dev/mdx-nextjs-13

import About from "@/components/about";
import Sidebar from "@/components/sidebar/Sidebar";
import { MDXContent } from "@/components/MDXContent";
import { getAllProjects, getProjectsPath, getProject } from "@/lib/projects"

async function Project({ id }) {
  const { title, date, content } = await getProject(id);
  return (
    <article>
      <h1>{title}</h1>
      <p>{date}</p>
      <MDXContent source={content} />
    </article>
  )
}

// Disallowed in client mode
// export const metadata = {
//   title: "About || Tokyo - Personal Portfolio React Nextjs Template",
// };
const Page = ({ params }) => {
  // const Project = dynamic(() => import("@/public/projects/" + params.project + "/project.mdx"));
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
export async function generateStaticParams() {
  return getAllProjects();
}

export default Page;
