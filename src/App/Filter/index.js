import React, { PureComponent } from 'react';
import shortid from 'shortid';
import CustomDropdown from '../CustomDropdown';
import './filter.css';

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
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '',
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleDropdownChange(value) {
    this.setState({ selectedCategory: value });
  }

  render() {
    let filteredList = [];

    if (this.state.selectedCategory !== '') {
      for (let i = 0; i < listContent.length; i += 1) {
        if (listContent[i].categories.includes(this.state.selectedCategory)) {
          filteredList.push(listContent[i]);
        }
      }
    } else {
      filteredList = [...listContent];
    }

    filteredList = filteredList.map(item => (
      <li key={item.id}>
        <h3>{item.title}</h3>
        <p><strong>Categories</strong>: {item.categories.join(', ')}</p>
      </li>
    ));

    return (
      <section className="filter-component">
        <div>
          <h2>Filter By Category</h2>
          <CustomDropdown
            data={filterData}
            onDropdownChange={this.handleDropdownChange}
          />
        </div>
        <div>
          <ul>
            { filteredList }
          </ul>
        </div>
      </section>
    );
  }
}
