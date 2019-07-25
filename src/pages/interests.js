import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import post1Image from "../images/eastwood-order-completed.png"
import post2Image from "../images/eastwood-no-comments.png"
import post3Image from "../images/eastwood-searching.png"

import Card from "../components/Card";

function InterestsPage() {
  const posts = [
    { 
      id: 1,
      title: 'What do you do during your spare time?',
      image: post1Image,
      description: 'Apart from being a web developer, I enjoy most of my time practicing yoga, free diving, reading, cooking, playing football and basketball. During the summer, I enjoy taking walks, biking, swimming, and snorkling.',
      date: 'May 1' 
    },
    { 
      id: 2,
      title: 'What do you enjoy eating?',
      image: post2Image,
      description: 'I enjoy eating healthy foods and trying new recipes. Bring on the spinach, kale and chickpeas 😁',
      date: 'May 17' 
    },
    { 
      id: 3,
      title: 'Can coffee make you a better developer?',
      image: post3Image,
      description: 'I like to create websites for fun, trying out new technologies and tools to improve myself as a developer and to stay up to date with current technologies.',
      date: 'May 28'
    },
  ]
  return (
    <Layout>
      <SEO
        title="Interests"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <section className="container self-center py-12 px-4 min-h-48 flex-1">
        {posts.map(post => (
          <Card key={post.id} post={post} />
        ))}
      </section>
    </Layout>
  );
}

export default InterestsPage;
