import React from 'react';
import reactLogo from './assets/tools-logos/react.png';
import typescript from './assets/tools-logos/typescript.png'
import docker from './assets/tools-logos/docker.png'
import gitlab from './assets/tools-logos/gitlab.png'
import html5 from './assets/tools-logos/html5.png'
import mongodb from './assets/tools-logos/mongodb.png'
import node from './assets/tools-logos/node.png'
import npm from './assets/tools-logos/npm.png'
import redux from './assets/tools-logos/redux.png'
import sass from './assets/tools-logos/sass.png'
import vscode from './assets/tools-logos/vscode.png'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header>
          <span>Faro Frontend</span><br /> <strong>Development</strong>
        </header>
        <p className='App-tipp'>This site is being rebuild, please come back later.<br />
          For further information: <code>contact(at)o-faro.de</code></p>
        <div className="App-skills">
          <img src={reactLogo} alt="" />
          <img src={typescript} alt="" />
          <img src={redux} alt="" />
          <img src={html5} alt="" />
          <img src={sass} alt="" />
          <img src={npm} alt="" />
          <img src={node} alt="" />
          <img src={vscode} alt="" />
          <img src={docker} alt="" />
          <img src={gitlab} alt="" />
          <img src={mongodb} alt="" />
          <span>❤️</span>
        </div>
      </div>
    </div>
  );
}

export default App;
