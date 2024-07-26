import React from 'react';
import Nav from './components/Nav';
import ToolsBar from './components/ToolsBar';
import ProductDisplay from './components/ProductDisplay';

function App() {
  return (
    <>
      <Nav>
        <ToolsBar />
      </Nav>
      <ProductDisplay/>
    </>
  );
}

export default App;
