import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return(
    <div style={{height: '100px', width: '100%', backgroundColor: "#18a0fb"}}>
      <h1>Title</h1>
    </div>
  )
}

export default App; 

ReactDOM.render(<App />, document.getElementById("root"));