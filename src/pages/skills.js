import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import skills from '../data/skills.json'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function SkillsPage() {
  return (
    <Layout>
      <SEO
        title="Skills"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />    
      <section className="container self-center resume-section py-12 px-4 min-h-48 flex-1" id="skills">
      <div className="w-full">
        <div className="text-xl font-medium uppercase text-gray-500 mb-3">Programming Languages &amp; Tools</div>
        <ul className="pl-0 mb-4 text-5xl">
          {skills.map(skill => (
            <li className="inline-block mr-2 text-gray-600 hover:text-orange-600" key={skill.id}>
              <FontAwesomeIcon icon={['fab', skill.name]} spin={skill.name === 'react'} />
            </li>
          ))}
        </ul>

        <div className="text-xl font-medium uppercase text-gray-500 mb-3">Workflow</div>
          <ul className="fa-ul mb-0 text-gray-600">
            <li>
              <FontAwesomeIcon icon={['fas', 'check']} listItem /> Mobile-First, Responsive Design
            </li>
            <li>
              <FontAwesomeIcon icon={['fas', 'check']} listItem /> Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <FontAwesomeIcon icon={['fas', 'check']} listItem /> Cross Functional Teams
            </li>
            <li>
              <FontAwesomeIcon icon={['fas', 'check']} listItem />Agile Development &amp; Scrum
            </li>
            <li>
              <FontAwesomeIcon icon={['fas', 'check']} listItem />Cutting edge JavaScript frameworks
            </li>
            <li>
              <FontAwesomeIcon icon={['fas', 'check']} listItem />Design principles and UX
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default SkillsPage;
