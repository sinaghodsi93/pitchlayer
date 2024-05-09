import React from 'react';
import ReactDOM from 'react-dom';
import PluginView from './plugin/PluginView';
import PresentationView from './presentation/PresentationView';

const App = () => {
  return (
    <div>
      <PluginView />
      <PresentationView />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));