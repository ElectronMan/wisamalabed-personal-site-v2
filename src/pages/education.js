import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function EducationPage() {
  return (
    <Layout>
      <SEO
        title="Education"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section className="container self-center resume-section px-4 min-h-48 flex-1" id="education">
        <div className="w-full">
          <div className="flex flex-column md:flex-row justify-between flex-wrap mb-5">
            <div className="w-full md:w-3/4">
              <h3 className="mb-0 text-3xl leading-loose font-bold uppercase">McGill University</h3>
              <div className="text-2xl font-medium uppercase text-gray-600 mb-3">Education in computer science</div>
              <div className="text-gray-600">Bachelor's degree</div>
              <p className="text-gray-600">GPA: 3.53</p>
            </div>
            <div className="md:w-1/4 text-right">
              <span className="text-orange-700">Sept 2003 - Sept 2007</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default EducationPage;
