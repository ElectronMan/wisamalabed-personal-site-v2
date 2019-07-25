import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Ticker from '../components/Ticker';
import socialIcons from '../data/socialIcons.json'
import SocialIcon from '../components/SocialIcon'

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <div className="text-center py-12 px-4 min-h-48">
        <h1 className="mb-0 text-2xl md:text-6xl leading-loose font-bold uppercase">
          Hello World{" "}
          <Ticker
            easing="ease-out"
            delay={2000}
            speed={400}
            items={["Startup founder", "Problem solver", "Software eng", "Bug fixer", "Free diver", "Yoga practitioner", "Adaptive Ace", "Peacemaker", "Outcome owner"]}
          />
        </h1>

        <div className="uppercase text-sm md:text-base font-medium mb-5 text-gray-500">
          Toronto · Canada · (416) 276 4074 ·{" "}
          <a
            className="text-orange-600 hover:text-orange-900 hover:underline"
            href="mailto:wisam.alabed@mail.mcgill.ca"
          >wisam.alabed@mail.mcgill.ca</a>
        </div>
        <div className="">
          {socialIcons.map(icon => <SocialIcon className="inline-block h-12 w-12 text-center text-2xl leading-loose mr-1 lg:mr-4 hover:bg-orange-600 rounded-full cursor-pointer" key={icon.id} link={icon.link} name={icon.name} pack={icon.pack} title={icon.title} />
            
          )}
          
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
