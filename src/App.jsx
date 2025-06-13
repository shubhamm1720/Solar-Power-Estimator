
// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import AnimatedRoutes from "./AnimatedRoutes";


// function App() {
//   return (
//     <Router>
//       <AnimatedRoutes/>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <Router basename="/Solar-Power-Estimator">
      <AnimatedRoutes />
    </Router>
  );
}

export default App;