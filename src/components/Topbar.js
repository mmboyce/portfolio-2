import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);

class Topbar extends React.Component {
    render(){
        return(
            <div id="topbar">
                <FontAwesomeIcon icon="bars" />
                <a href="#about-link">About</a>
                <a href="#experience-link">Experience</a>
                <a href="#skills-link">Skills</a>
                <a href="#education-link">Education</a>
                <a href="#interests-link">Interests</a>
                <a href="#accomplishments-link">Accomplishments</a>
            </div>
        );
    }
}

export default Topbar;