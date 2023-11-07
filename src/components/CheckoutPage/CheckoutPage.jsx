import React, {  useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useLocation, useNavigate } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';

import { MultiSelect } from 'primereact/multiselect';
        
const CheckoutPage = () => {
  const navigate = useNavigate();
  
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null)
  
  const location = useLocation();
  const cart = location.state && location.state.cart ? location.state.cart : [];
  const countries = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' },
  ];

   const cards = [
    {
      name:'Credit card'
    },
    {
      name:'Debit card'
    }
   ]

   const months = [
    { name: 'January', value: '01' },
    { name: 'February', value: '02' },
    { name: 'March', value: '03' },
    { name: 'April', value: '04' },
    { name: 'May', value: '05' },
    { name: 'June', value: '06' },
    { name: 'July', value: '07' },
    { name: 'August', value: '08' },
    { name: 'September', value: '09' },
    { name: 'October', value: '10' },
    { name: 'November', value: '11' },
    { name: 'December', value: '12' },
  ];

  const years = [
    { name: '1996', value: '1996' },
    { name: '1997', value: '1997' },
    { name: '1998', value: '1998' },
    { name: '1999', value: '1999' },
    { name: '2000', value: '2000' },
    { name: '2001', value: '2001' },
    { name: '2002', value: '2002' },
    { name: '2003', value: '2003' },
    { name: '2004', value: '2004' },
    { name: '2005', value: '2005' },
    { name: '2006', value: '2006' },
    { name: '2007', value: '2007' },
    { name: '2008', value: '2008' },
    { name: '2009', value: '2009' },
    { name: '2010', value: '2010' },
    { name: '2011', value: '2011' },
    { name: '2012', value: '2012' },
    { name: '2013', value: '2013' },
    { name: '2014', value: '2014' },
    { name: '2015', value: '2015' },
    { name: '2016', value: '2016' },
    { name: '2017', value: '2017' },
    { name: '2018', value: '2018' },
    { name: '2019', value: '2019' },
    { name: '2020', value: '2020' },
  ];
  


  const formik = useFormik({
    initialValues: {
      Name: '',
      email: '',
      country: '',
      state: '',
      zip: '',
      cardNumber: '', 
      expirationMonth: '',
      expirationYear: '',
      cvv: '',
    },
    validate: (data) => {
      let errors = {};

      if (!data.Name) {
        errors.Name = 'First name is required';
      }
      if (!data.email) {
        errors.email = 'Email is required';
      }
      if (!data.country) {
        errors.country = 'Country is required';
      }
      if (!data.state) {
        errors.state = 'State/Country is required';
      }
      if (!data.zip) {
        errors.zip = 'Zip/Postal code is required';
      }

      return errors;
    },
    onSubmit: (values) => {
      navigate('/review', { state: { formData: values, cart: cart } });
    },
  });

  const isFormFieldInvalid = (name) => formik.touched[name] && formik.errors[name];

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const item of cart) {
      subtotal += item.price;
    }
    return subtotal.toFixed(2);
  };

  return (
    <div className="flex justify-center ">
   <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl p-4 m-4" >
      <form onSubmit={formik.handleSubmit} className="form">
      <div>
          <h3 className="text-3xl font-medium text-900 mb-3">Billing Details</h3>
          <div>
  <InputText
    id="Name"
    name="Name"
    placeholder="First & last name"
    value={formik.values.Name}
    onChange={formik.handleChange}
    className={isFormFieldInvalid('Name') ? 'p-invalid' : ''}
    style={{ width: '100%', marginBottom: '1rem' }}
  />
  {getFormErrorMessage('Name')}
</div>
<div>
  <InputText
    id="email"
    name="email"
    placeholder="Email address"
    value={formik.values.email}
    onChange={formik.handleChange}
    className={isFormFieldInvalid('email') ? 'p-invalid' : ''}
    style={{ width: '100%', marginBottom: '0.5rem' }}
  />
  {getFormErrorMessage('email')}
</div>
  <div>
        <Dropdown
  value={selectedCountry}
  onChange={(e) => {
    formik.setFieldValue('country', e.value);
    setSelectedCountry(e.value); 
  }}
  options={countries.map((country) => ({
    label: country.name,
    value: country.code,
  }))}
  optionLabel="label"
  placeholder="Select a Country"
  className={isFormFieldInvalid('country') ? 'p-invalid' : ''}
  style={{ width: '100%', marginBottom: '0.5rem' }}
/>


{getFormErrorMessage('country')}
</div>
        <div>
          <InputText
            id="state"
            name="state"
            placeholder="State/Country"
            value={formik.values.state}
            onChange={formik.handleChange}
            className={isFormFieldInvalid('state') ? 'p-invalid' : ''}
          />
          {getFormErrorMessage('state')}
        
        
          <InputText
            id="zip"
            name="zip"
            placeholder="Zip/Postal code"
            value={formik.values.zip}
            onChange={formik.handleChange}
            className={isFormFieldInvalid('zip') ? 'p-invalid' : ''}
          />
          {getFormErrorMessage('zip')}
        </div>
        </div>
        <div>
        <h3 className="text-3xl font-medium text-900 mb-3">Payment methods</h3>
          <div>
            <MultiSelect
              value={selectedCard}
              onChange={(e) => setSelectedCard(e.value)}
              options={cards}
              optionLabel="name"
              placeholder="Select Card"
              maxSelectedLabels={3}
              className="w-full md:w-20rem"
              style={{ width: '100%', marginBottom: '0.5rem' }}
            />
          </div>
          <div>
            <InputText
              id="cardNumber"
              name="cardNumber"
              placeholder="Card Number"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              className={isFormFieldInvalid('cardNumber') ? 'p-invalid' : ''}
              style={{ width: '100%', marginBottom: '0.5rem' }}
            />
            {getFormErrorMessage('cardNumber')}
          </div>
          <div>
          <div className="p-grid p-fluid">
            <div className="p-col-6">
              <Dropdown
                value={formik.values.expirationMonth}
                options={months}
                onChange={(e) => formik.setFieldValue('expirationMonth', e.value)}
                optionLabel="name"
                placeholder="Select Month"
                style={{ width: '100%', marginBottom: '0.5rem' }}
              />
            </div>
            <div className="p-col-6">
              <Dropdown
                value={formik.values.expirationYear}
                options={years}
                onChange={(e) => formik.setFieldValue('expirationYear', e.value)}
                optionLabel="name"
                placeholder="Select Year"
              />
            </div>
          </div>
          {getFormErrorMessage('expirationMonth')}
          {getFormErrorMessage('expirationYear')}
        </div>
          <div>
            <InputText
              id="cvv"
              name="cvv"
              placeholder="CVV"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              className={isFormFieldInvalid('cvv') ? 'p-invalid' : ''}
              style={{ width: '100%', marginBottom: '0.5rem' }}
            />
            {getFormErrorMessage('cvv')}
          </div>
        </div>
        <div>
          <Button type="submit" label="Submit" />
        </div>
      </form>
    </div>
    <div className=" surface-0 p-4 shadow-2 border-round col-span-1" style={{ maxHeight: '400px', marginLeft:'350px',marginTop:'50px'}}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <i className="pi pi-shopping-cart text-xl mr-2" />
  <h3 className="text-3xl font-medium text-900">Cart summary</h3>
</div>

        {cart.map((item, index) => (
      <div key={index} className="d-flex justify-content-between">
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <h4 style={{ marginRight: '20px' }}>Quantity:{item.quantity}*{item.name}</h4>
        <p>{item.price}</p>
      </div>
    </div>
    
      ))}
      <div>
          <h3 className='text-end'>Subtotal: ${calculateSubtotal()}</h3>
        </div>
        </div>
    </div>
  );
};

export default CheckoutPage;




