import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './components/ProductListing/ProductListing';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import ReviewAndSubmitPage from './components/Review/Review';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductListing />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/review" element={<ReviewAndSubmitPage />} />
      </Routes>
    </Router>
  );
};

export default App;
