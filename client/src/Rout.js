import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import App from "./App";
import PaymentStatus from "./comps/PaymentStatus";

const Rout = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route
          exact
          path="/payment/status/:paymentId"
          element={<PaymentStatus />}
        />
      </Routes>
    </Router>
  );
};

export default Rout;
