import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './dropdown.css';

export default class Dropdown extends PureComponent {
  state = {
    value: null, // Track the currently selected dropdown item
    isOpen: false, // Is the dropdown currently opened?
    currentTitle: this.props.defaultTitle, // Keep the title of the current selection handy
    previousTitle: this.props.defaultTitle, // Keep a copy of a the previously selected title in case we cancel the dropdown
  };

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  setRef = (node) => {
    this.ddRef = node;
  }

  handleDocumentClick = (event) => {
    event.preventDefault(); // Keep any default actions from bubbling up

    // Check to see if the dropdown is currently open, a ref has been assigned, and the ref does not contain our target
    if (this.state.isOpen && this.ddRef && !this.ddRef.contains(event.target)) {
      this.toggleDropdown(event);
    }
  }

  toggleDropdown = (event) => {
    event.preventDefault(); // Keep any default actions from bubbling up
    const previousTitle = this.state.currentTitle; // Backup the previous title

    this.setState({
      previousTitle, // Set previous title into state
      isOpen: !this.state.isOpen, // Whatever the current open state is, replace it with the opposite
    });
  }

  handleSelection(value, content) {
    const previousTitle = this.state.currentTitle; // Backup the previous title

    this.setState({
      currentTitle: content, // Set the select title into state
      isOpen: false, // Close the dropdown after selection
      previousTitle, // Set previous title into state
      value, // Set the selected value into state
    });

    this.props.onDropdownChange(value); // Pass currently selected value via props to the parent's method
  }

  render() {
    // For each index in our data array
    const options = this.props.data.map(option => (
      // Create an option element with the desired key, value, and content
      <li
        key={option.id}
        value={option.value}
        content={option.content}
        onClick={() => this.handleSelection(option.value, option.content)}
        onKeyPress={() => this.handleSelection(option.value, option.content)}
        aria-selected="false"
        role="option"
      >
        {option.content}
      </li>
    ));

    // Add/remove open class for styling purposes
    const cssClass = this.state.isOpen ? 'open' : '';
    // If the dropdown is open, show the default title, otherwise show the current title
    const currentSelectionTitle = this.state.isOpen ? this.props.defaultTitle : this.state.currentTitle;

    // Then return a select element, generated with our options variable from above
    return (
      <div className="dropdown" ref={this.setRef}>
        <button onClick={this.toggleDropdown} className="current-selection">
          { currentSelectionTitle }
        </button>
        <ul
          className={cssClass}
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

Dropdown.defaultProps = {
  defaultTitle: 'Select...',
};

Dropdown.propTypes = {
  // Ensure we're receiving data and it's being passed in a way that's usable by this Component
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.str,
    value: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  // Ensure we're getting a default title passed in
  defaultTitle: PropTypes.string,
  // Ensure we're getting a method passed that can use the selected option
  onDropdownChange: PropTypes.func.isRequired,
};
