import React from 'react';
import shortid from 'shortid';
import logo from '../_ui/logo.svg';
import './App.css';

import CustomDropdown from './CustomDropdown';

const App = () => {
  const formFieldData = [
    {
      id: shortid.generate(),
      value: 'option1',
      content: 'Option 1',
    },
    {
      id: shortid.generate(),
      value: 'option2',
      content: 'Option 2',
    },
    {
      id: shortid.generate(),
      value: 'option3',
      content: 'Option 3',
    },
  ];

  const navigationData = [
    {
      id: shortid.generate(),
      value: '/about',
      content: 'About Us',
    },
    {
      id: shortid.generate(),
      value: '/contact',
      content: 'Contact',
    },
    {
      id: shortid.generate(),
      value: '/products',
      content: 'Products',
    },
    {
      id: shortid.generate(),
      value: '/news-and-events',
      content: 'News & Events',
    },
    {
      id: shortid.generate(),
      value: '/order',
      content: 'Order Now',
    },
  ];

  const filterData = [
    {
      id: shortid.generate(),
      value: 'strategy',
      content: 'Strategy',
    },
    {
      id: shortid.generate(),
      value: 'digital',
      content: 'Digital',
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>

      <main>
        <div>
          <h2>Form Field</h2>
          <CustomDropdown data={formFieldData} />
        </div>

        <div>
          <h2>Navigation</h2>
          <CustomDropdown data={navigationData} />
        </div>

        <div>
          <h2>Filtering</h2>
          <CustomDropdown data={filterData} />
        </div>
      </main>
    </div>
  );
};

export default App;
