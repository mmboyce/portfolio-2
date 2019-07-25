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
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#skills">Skills</a>
                <a href="#education">Education</a>
                <a href="#interests">Interests</a>
                <a href="#accomplishments">Accomplishments</a>
            </div>
        );
    }
}

export default Topbar;