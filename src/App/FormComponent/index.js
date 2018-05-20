import React, { PureComponent } from 'react';
import shortid from 'shortid';
import CustomDropdown from '../CustomDropdown';
import './form.css';

// Our test data that will generate the dropdown
const formFieldData = [
  {
    id: shortid.generate(),
    value: '',
    content: 'Select...',
  },
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

export default class FormComponent extends PureComponent {
  state = {
    value: '', // Track the currently selected dropdown item
    formSubmitted: false, // Whether the form has been submitted or not
  };

  // When the dropdown updates, update our state
  handleDropdownChange = (value) => {
    this.setState({ value });
  }

  // When the form is submitted, set our state to reflect that
  formSubmit = (event) => {
    event.preventDefault();
    this.setState({ formSubmitted: true });
  }

  render() {
    return (
      <section className="form-component">
        <div>
          <h2>Form Component</h2>
          <form onSubmit={this.formSubmit}>
            {/* Call an instance of the CustomDropdown component and pass in our data and method */}
            <CustomDropdown
              data={formFieldData}
              onDropdownChange={this.handleDropdownChange}
            />
            <button>Submit</button>
          </form>
        </div>
        <div>
          {/* Display the currently selected dropdown item via state */}
          <p>Current dropdown value: &apos;<strong>{ this.state.value }</strong>&apos;</p>

          {/* Conditionally display the selected dropdown item based on whether the form has been submitted or not */}
          {this.state.formSubmitted &&
            <p>Form has been submitted with dropdown value equal to <strong>{this.state.value}</strong></p>
          }
        </div>
      </section>
    );
  }
}
