import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class SocialIcon extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {

    const { link, name, pack, title } = this.props;

    return (
      <a className="inline-block h-12 w-12 text-center text-2xl leading-loose mr-1 lg:mr-4 hover:bg-orange-600 bg-gray-900 text-white rounded-full cursor-pointer" href={link} target="_blank" rel="noopener noreferrer" title={title}>
        <FontAwesomeIcon icon={[pack, name]} />
      </a>
    );
  }
}

export default SocialIcon;