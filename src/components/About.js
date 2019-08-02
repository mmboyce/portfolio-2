import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Me from './Me';

library.add(fab, faEnvelope);

class About extends React.Component{
    render(){
        return (
            <div id="about" class="section">
                <Me />
                <h1><span id="first">W Mathieu</span> Mimms-Boyce</h1>
                <a href="mailto:mathieumimmsboyce@gmail.com">
                    <FontAwesomeIcon id="email" icon="envelope"/>
                </a>
                <p>I am a Computer Science student at the University of Delaware, born and raised in Willingboro, NJ. I enjoy spending my free time either being involved in multiple on-campus organizations, or hanging out with my family!</p>
                <p>I've worked for <a href="http://www.geoswap.com/">GeoSwap</a>, a Wilmington, DE based startup, created multiple projects, and served as <b>Chapter President</b> of <i>The Premier International Fraternity of Engineers</i>, <a href="http://www.sigphipsi.com/aboutAboutUs.html">Sigma Phi Delta.</a></p>
                <div class="icons">
                    <a href="https://www.linkedin.com/in/mmboyce/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                    <a href="https://github.com/mmboyce" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </div>
            </div>
        );
    }
}

export default About;