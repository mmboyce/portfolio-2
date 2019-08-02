import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Sidebar from './components/Sidebar';

class App extends React.Component {
  render() {
    return (
    <div id="App">
      <Sidebar pageWrapId={"page-wrap"}
               outerContainerId={"App"}/>

      <div id="page-wrap">
        <About/>
        <div>
          <Experience />
        </div>
        <Education />
        <Skills />
        <Interests />
      </div>
    </div>
    );
  }
}

export default App;
