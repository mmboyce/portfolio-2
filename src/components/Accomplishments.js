import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

library.add(faMedal);

class Accomplishments extends React.Component {
    render(){
        return(
            <div id="accomplishments" class="section">
                <p><FontAwesomeIcon icon="medal" id="medal"/> President, Sigma Phi Delta
                <span class="date"> November 2018 - Present</span></p>
                <p><FontAwesomeIcon icon="medal" id="medal"/> PR Chair, Sigma PHi Delta
                <span class="date"> May - November 2018</span></p>
            </div>
        );
    }
}

export default Accomplishments;