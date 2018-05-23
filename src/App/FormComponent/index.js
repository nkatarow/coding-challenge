import React, { PureComponent } from 'react';
import shortid from 'shortid';
import Dropdown from '../Dropdown';
import './form.css';

// Our test data that will generate the dropdown
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

export default class FormComponent extends PureComponent {
  state = {
    value: '', // Track the currently selected dropdown item
    submittedValue: '',
    formSubmitted: false, // Whether the form has been submitted or not
  };

  // When the dropdown updates, update our state
  handleDropdownChange = (value) => {
    this.setState({ value });
  }

  // When the form is submitted, set our state to reflect that
  formSubmit = (event) => {
    event.preventDefault();
    this.setState({
      formSubmitted: true,
      submittedValue: this.state.value,
    });
  }

  render() {
    return (
      <section className="form-component">
        <div>
          <form onSubmit={this.formSubmit}>
            {/* Call an instance of the Dropdown component and pass in our data and method */}
            <Dropdown
              data={formFieldData}
              defaultTitle="Select..."
              onDropdownChange={this.handleDropdownChange}
            />
            <button>Submit</button>
          </form>
        </div>
        <div>
          <h2>Form Component</h2>
          <p>The form component returns a form, an instance of the Dropdown component, a submit button, the currently selected option from the dropdown, and the value of that dropdown on last submission.</p>
          <p>This component has two methods: handleDropdownChange and formSubmit. The first sets the currently selected option from the dropdown into state, which is then used to display the selected option inline. The second prevents the default form submission event, and sets the formSubmitted state to true. When this state is true, another set of text appears displaying the submitted dropdown option.</p>

          {/* Display the currently selected dropdown item via state */}
          <p><strong>Current dropdown value:</strong> { this.state.value }</p>

          {/* Conditionally display the selected dropdown item based on whether the form has been submitted or not */}
          {this.state.formSubmitted &&
            <p><strong>Form has been submitted with dropdown value equal to:</strong> {this.state.submittedValue}</p>
          }
        </div>
      </section>
    );
  }
}
