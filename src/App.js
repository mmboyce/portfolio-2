import React from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Topbar from './components/Topbar';

class App extends React.Component {
  render() {
    return (
    <div>
      <Topbar />
      <About />
      <div>
        <Experience />
      </div>
      <Education />
      <Skills />
      <Interests />
    </div>
    );
  }
}

export default App;
