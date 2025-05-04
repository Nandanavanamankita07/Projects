import React from 'react';
import DataFetcher from './components/DataFetcher';
import OceanVisualization from './components/OceanVisualization';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Oceanography Research App</h1>

      {/* Ocean Data Section */}
      <DataFetcher />

      <hr />
      
      {/* Ocean Visualization Section */}
      <OceanVisualization />
    </div>
  );
};

export default App;
