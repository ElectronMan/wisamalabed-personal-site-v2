import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import profileImage from "../images/profile2.png"

class Card extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {

    const { post } = this.props;

    return (
      <div className="max-w-sm lg:w-3/4 lg:max-w-full lg:flex shadow-lg mt-6 card mx-auto">
        <div className="bg-white border-gray-400 lg:border-gray-400 border-r border-b border-l lg:border-l-0 lg:border-t h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Random image">
          <img className="lg:mt-12" src={post.image} fit="cover" />
        </div>
        <div className="bg-white border-gray-400 lg:border-gray-400 border-r border-b border-l lg:border-l-0 lg:border-t rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Members only
            </p>
            <div className=" text-gray-900 font-bold text-xl mb-2 title">{post.title}</div>
            <p className=" text-gray-900 text-base">{post.description}</p>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src={profileImage} alt="Wisam Al Abed's Profile Picture" />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Wisam Al Abed</p>
              <p className="text-orange-600 timestamp">{post.date}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;