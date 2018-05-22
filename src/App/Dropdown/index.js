import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './dropdown.css';

export default class Dropdown extends PureComponent {
  state = {
    value: '', // Track the currently selected dropdown item
    currentTitle: 'Select...',
    isOpen: false,
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
    document.addEventListener('touchend', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
    document.removeEventListener('touchend', this.handleClick, false);
  }

  handleClick = (event) => {
    if (this.state.isOpen) {
      let role = '';
      if (event.target.attributes.role !== undefined) {
        role = event.target.attributes.role.value;
      }

      if (role === 'option') {
        this.setState({
          currentTitle: event.target.attributes.content.value,
          value: event.target.attributes.value.value,
          isOpen: false,
        });
      }
    } else {
      this.setState({ isOpen: true });
    }

    this.props.onDropdownChange(this.state.value); // Pass currently selected value via props to the parent's method
  }

  render() {
    // For each index in our data array
    const options = this.props.data.map(option => (
      // Create an option element with the desired key, value, and content
      <li
        key={option.id}
        value={option.value}
        aria-selected="false"
        content={option.content}
        role="option"
      >
        {option.content}
      </li>
    ));

    let classList = '';

    if (this.state.isOpen) {
      classList = 'open';
    }

    // Then return a select element, generated with our options variable from above
    return (
      <div className="dropdown">
        <div>{this.state.currentTitle}</div>
        <ul
          className={classList}
          onChange={this.dropDownHandler}
          value={this.state.value}
          role="listbox"
        >
          { options }
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  // Ensure we're receiving data and it's being passed in a way that's usable by this Component
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.str,
    value: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  // Ensure we're getting a method passed that can use the selected option
  onDropdownChange: PropTypes.func.isRequired,
};
