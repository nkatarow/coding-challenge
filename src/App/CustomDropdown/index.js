import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './custom-dropdown.css';

export default class CustomDropdown extends PureComponent {
  state = { value: '' }; // Track the currently selected dropdown item

  dropDownHandler = (event) => {
    this.props.onDropdownChange(event.target.value); // Pass currently selected value via props to the parent's method
    this.setState({ value: event.target.value }); // Set our state with the currently selected value
  }

  render() {
    // For each index in our data array
    const options = this.props.data.map(option => (
      // Create an option element with the desired key, value, and content
      <option
        key={option.id}
        value={option.value}
      >
        {option.content}
      </option>
    ));

    // Then return a select element, generated with our options variable from above
    return (
      <select
        onChange={this.dropDownHandler}
        value={this.state.value}
      >
        { options }
      </select>
    );
  }
}

CustomDropdown.propTypes = {
  // Ensure we're receiving data and it's being passed in a way that's usable by this Component
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.str,
    value: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  // Ensure we're getting a method passed that can use the selected option
  onDropdownChange: PropTypes.func.isRequired,
};
