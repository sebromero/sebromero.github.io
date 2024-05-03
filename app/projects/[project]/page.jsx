import About from "@/components/about";
import Sidebar from "@/components/sidebar/Sidebar";

export const metadata = {
  title: "About || Tokyo - Personal Portfolio React Nextjs Template",
};
const index = ({ params }) => {
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
              {/* <About /> */}
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default index;
