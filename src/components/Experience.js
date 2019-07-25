import React from 'react';

class Experience extends React.Component {
    render(){
        return(
            <div id="experience" class="section">
                <div id="professional">
                    <h1>Professional Experience</h1>
                    <a href="http://www.geoswap.com">
                        <h2>Software Developer Intern</h2>
                        <h3>GeoSwap</h3>
                    </a>
                    <p>Assisted deployment of targeted advertisements by developing a command line utility to read a spreadsheet and create ads based off the data in the excel file.</p><p>Additionally created a GUI to aid with use of the command line tool as well as being responsible for testing all code written.</p>
                    <h4>June 2018 - August 2018</h4>
                </div>
                <div id="projects">
                    <h1>Projects</h1>
                    <a href="https://github.com/mmboyce/Estuary-Escapade">
                        <h2>Estuary Escapade</h2>
                        <h3>Educational Game</h3>
                    </a>
                    <p>Estuary Escapade is an educational game made for display at <a href="https://dnrec.alpha.delaware.gov/">DNREC's</a> offices. Its purpose is to teach children on field trips about the tasks of an Estuary Researcher and the fish researched in the Delaware Bay</p>
                    <p>I worked on Estuary Escapade with 4 other team members. Regular meetings were held to establish each team member's tasks for each sprint of the project. We created  Alpha, Beta, and Final presentations throughout development to show to the client. I handled much of the JavaDoc documentation, and work on the game's logic. </p>
                    <h4>November 2018 - December 2018</h4>
                    <a href="https://github.com/mmboyce/grenzy">
                        <h2>Grenzy</h2>
                        <h3>Smartphone Game</h3>
                    </a>
                    <p>Grenzy is a game in which the player takes the role of a fish that eats smaller fish. The player must avoid being eaten by larger fish. The more fish the player eats, the greater their score.</p>
                    <p>Grenzy was developed with the MVC development principle in mind. I collaborated with another team member to design the game. I programmed the random generation of fish, as well as the method of which the powerups and fish in the game move.</p>
                    <h4>April 2017</h4>
                </div>
            </div>
        );
    }
}

export default Experience;