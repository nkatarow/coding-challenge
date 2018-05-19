import React, { PureComponent } from 'react';
import shortid from 'shortid';
import CustomDropdown from '../CustomDropdown';

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
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      formSubmitted: false,
    };

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleDropdownChange(value) {
    this.setState({ value });
  }

  formSubmit(event) {
    event.preventDefault();
    this.setState({ formSubmitted: true });
  }

  render() {
    return (
      <section>
        <h2>Form Component</h2>
        <form onSubmit={this.formSubmit}>
          <CustomDropdown
            data={formFieldData}
            onDropdownChange={this.handleDropdownChange}
          />
          <button>Submit</button>
        </form>

        <p>Current dropdown value: &apos;{ this.state.value }&apos;</p>

        {this.state.formSubmitted &&
          <p>Form has been submitted with dropdown value equal to {this.state.value}</p>
        }
      </section>
    );
  }
}
