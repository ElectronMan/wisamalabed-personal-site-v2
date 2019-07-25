import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import errorImageOne from "../images/eastwood-fatal-error.png"
import errorImageTwo from "../images/eastwood-come-back-later.png"
import errorImageThree from "../images/eastwood-logged-out.png"

import Card from "../components/Card";

import styled from "styled-components"

const StyledCard = styled.section`
.card {
  animation: glitchy 0.3s ease 0.3s infinite;
  }
  .timestamp {
    animation: text-flicker 3s linear infinite;
  }
  
  @keyframes glitchy {
      0%   {transform: translate(-2px, 2px);}
      25%  {transform: translate(-2px, -2px);}
      50%  {transform: translate(2px, 2px);}
      75%  {transform: translate(2px, -2px);}
      100%  {transform: translate(-2px, 2px);}
  }
  
  @keyframes text-flicker {
    0% {
      opacity:0.1;
      text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
    }
    
    2% {
      opacity:1;
      text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
    }
    8% {
      opacity:0.1;
      text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
    }
    9% {
      opacity:1;
      text-shadow: 0px 0px 29px rgba(242, 22, 22, 1);
    }
    12% {
      opacity:0.1;
      text-shadow: 0px 0px rgba(242, 22, 22, 1);
    }
    20% {
      opacity:1;
      text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
    }
    25% {
      opacity:0.3;
      text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
    }
    30% {
      opacity:1;
      text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
    }
    
    70% {
      opacity:0.7;
      text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
    }
    
    72% {
      opacity:0.2;
      text-shadow:0px 0px 29px rgba(242, 22, 22, 1)
    }
    
    77% {
      opacity:.9;
      text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
    }
    100% {
      opacity:.9;
      text-shadow: 0px 0px 29px rgba(242, 22, 22, 1)
    }
  }
`;

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function NotFoundPage() {
  const errors = [
    { 
      id: 1,
      title: '404!',
      image: errorImageOne,
      description: 'There is nothing to see here go back',
      date: randomDate(new Date(2019, 0, 1), new Date()).toUTCString() 
    },
    { 
      id: 2,
      title: '404! 404!',
      image: errorImageTwo,
      description: 'No Seriously there are no secrets here',
      date: randomDate(new Date(2019, 0, 1), new Date()).toUTCString()
    },
    { 
      id: 3,
      title: '404! 404! 404!',
      image: errorImageThree,
      description: 'Isn\'t the third time supposed to be the charm?',
      date: randomDate(new Date(2019, 0, 1), new Date()).toUTCString()
    },
  ]
  return (
    <Layout>
      <SEO title="404: Not found" />
      <StyledCard className="py-12 px-4 min-h-48 container self-center">
        {errors.map(error => (
          <Card key={error.id} post={error} />
        ))}
      </StyledCard> 
    </Layout>
  );
}

export default NotFoundPage;
