import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux"
import Toggle from 'react-toggle'
import "react-toggle/style.css"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styled from "styled-components"

const StyledToggle = styled.div`
  .theme-switch.react-toggle--checked .react-toggle-track {
    background-color: #fff;
  }
  .theme-switch.react-toggle--checked .react-toggle-thumb {
    background-color: #1a202c;
  }
`;

import { toggleDarkMode } from '../state/app'

function Header({ siteTitle, isDarkMode, dispatch }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-transparent p-6">
      <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto p-4 md:p-8">
        <Link to="/" className={`flex items-center no-underline font-semibold text-base tracking-tight cursor-pointer uppercase hover:text-orange-600`}>
          <span className="font-bold text-xl tracking-tight">{siteTitle}</span>
          <span className="capitalize px-2 py-1 text-xs font-thin mb-10">Beta</span> 
        </Link>
        
          <div className="text-base font-semibold uppercase mt-4 md:mt-0">
            <Link
              to="/experience"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline hover:text-orange-600"
            >
              Experience
            </Link>

            <Link
              to="/education"
              className="block md:inline-block  mt-4 md:mt-0 mr-6 no-underline hover:text-orange-600"
            >
              Education
            </Link>

            <Link
              to="/skills"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline hover:text-orange-600"
            >
              Skills
            </Link>

            <Link
              to="/interests"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline hover:text-orange-600"
            >
              Passions
            </Link>
            <StyledToggle className="block md:inline-block mt-4 md:mt-0">
             
                <Toggle
                  id="theme-toggle"
                  defaultChecked={isDarkMode}
                  className="theme-switch -mb-1"
                  icons={{
                    checked: <FontAwesomeIcon icon="sun" color="black" className="" size="xs"/>,
                    unchecked: <FontAwesomeIcon icon="moon" color="white" size="xs" />,
                  }}
                  aria-label='No label tag'
                  onChange={() => dispatch(toggleDarkMode(!isDarkMode))} 
                />
            </StyledToggle>
          </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default connect(state => ({
  isDarkMode: state.app.isDarkMode
}), null) (Header);
