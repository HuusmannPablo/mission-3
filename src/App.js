import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="custom-search">
        <script type="text/javascript" 
          id="bcs_js_snippet"
          src="https://ui.customsearch.ai/api/ux/rendering-js?customConfig=97a80493-ccfb-4556-84cb-33529c545848&market=en-US&version=latest&q=">
        </script>
        {/* <script type="text/javascript" 
          id="bcs_js_snippet"
          src="https://ui.customsearch.ai/api/ux/rendering-js?customConfig=97a80493-ccfb-4556-84cb-33529c545848&market=en-US&version=latest&q=">
          src="https://ui.customsearch.ai/hosted-page?customconfig=97a80493-ccfb-4556-84cb-33529c545848&version=latest&market=en-US&q="
          >
        </script>   */}
      </div> 
    </div>
  );
}

export default App;
