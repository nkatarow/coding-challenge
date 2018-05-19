import React, { PureComponent } from 'react';
import shortid from 'shortid';
import CustomDropdown from '../CustomDropdown';
import './form.css';

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
      <section className="form-component">
        <div>
          <h2>Form Component</h2>
          <p>Current dropdown value: &apos;<strong>{ this.state.value }</strong>&apos;</p>
        </div>
        <div>
          <form onSubmit={this.formSubmit}>
            <CustomDropdown
              data={formFieldData}
              onDropdownChange={this.handleDropdownChange}
            />
            <button>Submit</button>
          </form>

          {this.state.formSubmitted &&
            <p>Form has been submitted with dropdown value equal to <strong>{this.state.value}</strong></p>
          }
        </div>
      </section>
    );
  }
}
