import React, { PureComponent } from 'react';
import shortid from 'shortid';
import Dropdown from '../Dropdown';
import './filter.css';

// Our test data that will generate the dropdown
const filterData = [
  {
    id: shortid.generate(),
    value: '',
    content: 'All',
  },
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

// Our test data that we will need to filter based on current dropdown selection
const listContent = [
  {
    id: shortid.generate(),
    title: 'Strategy Filterable Item',
    categories: ['strategy'],
  },
  {
    id: shortid.generate(),
    title: 'Digital Filterable Item',
    categories: ['digital'],
  },
  {
    id: shortid.generate(),
    title: 'Strategy & Digital Filterable Item',
    categories: ['strategy', 'digital'],
  },
  {
    id: shortid.generate(),
    title: 'Unassigned Filterable Item',
    categories: ['unassigned'],
  },
  {
    id: shortid.generate(),
    title: 'Empty Filterable Item',
    categories: [''],
  },
];

export default class FormComponent extends PureComponent {
  state = {
    selectedCategory: '', // Track the currently selected dropdown item
  };

  // When the dropdown updates, update our state
  handleDropdownChange = (value) => {
    this.setState({ selectedCategory: value });
  }

  render() {
    let filteredList = []; // Create an empty array to track which data should be displayed

    // If our dropdown does not have all selected
    if (this.state.selectedCategory !== '') {
      // Loop through our set of data to be filtered
      for (let i = 0; i < listContent.length; i += 1) {
        // If the categories key array contains the selected dropdown value
        if (listContent[i].categories.includes(this.state.selectedCategory)) {
          // Push it into our tracking array
          filteredList.push(listContent[i]);
        }
      }
    } else {
      // Otherwise push all items into our tracking array
      filteredList = [...listContent];
    }

    // For each item in our tracking array
    filteredList = filteredList.map(item => (
      // Create a new list item with the desired content
      <li key={item.id}>
        <h3>{item.title}</h3>
        <p><strong>Categories</strong>: {item.categories.join(', ')}</p>
      </li>
    ));

    return (
      <section className="filter-component">
        <div className="left">
          {/* Call an instance of the Dropdown component and pass in our data and method */}
          <Dropdown
            data={filterData}
            defaultTitle="Select..."
            onDropdownChange={this.handleDropdownChange}
          />
        </div>
        <div className="right">
          <h2>Filter By Category</h2>
          <p>The filter component returns an instance of the Dropdown component and an unordered list containing test data with titles and arrays of categories.</p>
          <p>When the dropdown changes, this component runs a method that sets the state to the currently selected option.</p>
          <p>If the currently set state is an empty string, all pieces of data are displayed in the unordered list. Otherwise, the component will loop through the dataset, and add any object that has matching categories to a new array which will be used to display an updated and filtered list of data.</p>

          <ul className="filtered-list-example">
            {/* Display our filtered list which has been generated from our tracking array */}
            { filteredList }
          </ul>
        </div>
      </section>
    );
  }
}
