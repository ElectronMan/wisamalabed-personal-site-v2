import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { connect } from "react-redux"

import Header from "./header";

import {
  library
} from '@fortawesome/fontawesome-svg-core'

import {
  faTrophy,
  faRss,
  faCheck,
  faFilePdf,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faAngular,
  faReact,
  faNodeJs,
  faSass,
  faBootstrap,
  faBitbucket,
  faGitAlt,
  faTrello,
  faNpm,
  faSlackHash,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faGithub,
  faLinkedin,
  faTrophy,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faAngular,
  faReact,
  faNodeJs,
  faSass,
  faBootstrap,
  faBitbucket,
  faGitAlt,
  faTrello,
  faNpm,
  faSlackHash,
  faRss,
  faCheck,
  faFilePdf,
  faUserCircle
)

function Layout({ children, isDarkMode }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className={`flex flex-col font-sans min-h-screen  ${ isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className="flex flex-col flex-1 md:justify-center max-w-6xl mx-auto px-4 py-8 md:p-8 w-full">
            {children}
          </div>

          <footer className="bg-transparent">
            <div className="flex flex-wrap justify-between max-w-6xl mx-auto p-4 md:p-8 text-sm">
              <p className="">
                &#169;{" "}
                <span
                  className="font-bold"
                >
                  Wisam Al Abed 2019
                </span>
              </p>

              <p className="flex flex-wrap">
                <a
                  href="https://www.gatsbyjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="rounded-full bg-purple-500 hover:bg-purple-900 uppercase px-2 py-1 text-xs font-bold mr-1 text-black hover:text-white">Gatsby</span>
                </a>
                <a 
                  href="https://tailwindcss.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <span className="rounded-full bg-teal-500 uppercase px-2 py-1 text-xs font-bold mr-1 text-black hover:text-white hover:bg-teal-900">Tailwindcss</span>                   
                </a> 
                <a 
                  href="https://icons8.com/ouch" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <span className="rounded-full bg-green-300 hover:bg-green-900 uppercase px-2 py-1 text-xs font-bold text-black hover:text-white">icons8</span>    
                </a> 
              </p>
            </div>
          </footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default connect(state => ({
  isDarkMode: state.app.isDarkMode
}), null) (Layout);
