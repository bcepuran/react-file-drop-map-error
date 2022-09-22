import { FileDrop } from 'react-file-drop';

import './App.css';

const App = () => {

  const handleDrop = () => {
    console.log('handleDrop');
    return 1;
  };
  const handleTargetClick = () => {
    console.log('handleTargetClick');
    return 1;
  };

  return (
    <div className="App">
      <header className="App-header">
        <FileDrop
          onDrop={handleDrop}
          onTargetClick={handleTargetClick}
        >
          <div>You should see the following in your terminal where you ran <strong>npm start</strong>:</div>
          <div>
            <pre>Compiled with warnings.</pre>
            <pre>
              "Failed to parse source map from '/PATH/TO/REPO/node_modules/src/FileDrop.tsx'
            </pre>
          </div>
          <div>The FileDrop.js.map file in node_modules references ../src/FileDrop.tsx which does not exist.</div>
          <div>You could disable sourceMap in your tsconfig.json file, or fix the reference to resolve.</div>
        </FileDrop>
      </header>
    </div>
  );
}

export default App;
