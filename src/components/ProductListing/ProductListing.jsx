import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { productData } from '../data/productsData';
import { useNavigate } from 'react-router-dom';
import { Rating } from "primereact/rating";
const ProductListing = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
 

  const handleClick = (product) => {
    console.log('Product added to cart:', product);
    setCart([...cart, product]);
  
  };

  const header = (data) => (
    <img alt={data.name} src={data.src} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
  );

  const footer = (data) => (
    <Button
      label="Buy"
      style={{ width: '100%' }}
      className="p-button-success"
      onClick={() => handleClick(data)}
      disabled={cart.includes(data)}
    />
  );


  return (
    <div>
    <h2 className='text-center'>Product Listing</h2>
    <Button
      icon="pi pi-shopping-cart"
      className="p-button-secondary p-ml-2"
      onClick={() => navigate('/checkout', { state: { cart: cart } })}
      label={` (${cart.length})`}
    />
  
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
      {productData.map((data, idx) => (
        <div className="card flex justify-content-center" key={idx}>
          <Card title={data.name} subTitle={data.price} footer={footer(data)} header={header(data)} className="md:w-25rem">
            <Rating value={5} readOnly cancel={false} />
          </Card>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default ProductListing;
