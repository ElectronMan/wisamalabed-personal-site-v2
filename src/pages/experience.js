import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import resume from '../data/resume.json'

function ExperiencePage() {
  return (
    <Layout>
      <SEO
        title="Experience"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section className="container self-center py-12 px-4 min-h-48 flex-1">
      <div className="w-full">
        {resume.map(resumeItem => (
          <div className="flex flex-column md:flex-row justify-between mb-5 flex-wrap" key={resumeItem.id} >
            <div className="w-full md:w-3/4">
              <h3 className="mb-0 text-base md:text-3xl leading-loose font-bold uppercase">{resumeItem.title}</h3>
                <div className="text-sm md:text-2xl font-medium uppercase text-gray-700 mb-3">
                  <a href={resumeItem.link} target="_blank" className="hover:text-orange-600"> {resumeItem.company} </a>
                </div>
                <p className="mt-0 mb-4 text-gray-500 text-xs md:text-base">{resumeItem.description}</p>
            </div>
            <div className="md:w-1/4 text-right text-xs md:text-base md:mt-10">
              <span className="text-orange-700">{resumeItem.date}</span>
            </div>
          </div>
        ))}
        <a href="https://www.visualcv.com/wisam-al-abed/" target="_blank" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>Download Full Resume</span>
        </a>
      </div>
    </section>
    </Layout>
  );
}

export default ExperiencePage;
