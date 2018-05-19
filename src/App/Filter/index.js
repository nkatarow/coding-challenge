import React, { PureComponent } from 'react';
import shortid from 'shortid';
import CustomDropdown from '../CustomDropdown';

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
    title: 'Title of item (strategy)',
    categories: ['strategy'],
  },
  {
    id: shortid.generate(),
    title: 'Title of item (digital)',
    categories: ['digital'],
  },
  {
    id: shortid.generate(),
    title: 'Title of item (strategy & digital)',
    categories: ['strategy', 'digital'],
  },
  {
    id: shortid.generate(),
    title: 'Title of item (unassigned)',
    categories: ['unassigned'],
  },
  {
    id: shortid.generate(),
    title: 'Title of item ("")',
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
      <li key={item.id}>{item.title}</li>
    ));

    return (
      <section>
        <h2>Filter Component</h2>
        <CustomDropdown
          data={filterData}
          onDropdownChange={this.handleDropdownChange}
        />

        <ul>
          { filteredList }
        </ul>
      </section>
    );
  }
}
