import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from 'primereact/card';

const ReviewAndSubmitPage = () => {
  const location = useLocation();
  const { cart, formData } = location.state || { cart: [], formData: {} };

  const renderCartItems = () => {
    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return (
        <div>
          <p>No items in the cart.</p>
          <p>Thanks for visiting our store!</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Thanks for shopping with us! Your products will be sent to your address:</p>
          <ul className="p-list-unstyled">
            {cart.map((item, index) => (
              <li key={index}>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
              </li>
            ))}
          </ul>
          <div>
            <Card title="Customer Information" className="p-mb-4">
              <p>First Name: {formData.Name}</p>
              <p>Email: {formData.email}</p>
              <p>Country: {formData.country}</p>
              <p>State/Country: {formData.state}</p>
              <p>Zip/Postal Code: {formData.zip}</p>
            </Card>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="p-d-flex p-jc-center">
      <div className="p-d-flex p-flex-column p-jc-center p-ai-center">
        <h2 className="p-mb-3">Review and Submit Order Page</h2>
        <div className="p-mb-4">{renderCartItems()}</div>
      </div>
    </div>
  );
};

export default ReviewAndSubmitPage;
