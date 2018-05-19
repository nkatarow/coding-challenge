import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CustomDropdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.dropDownHandler = this.dropDownHandler.bind(this);
  }

  dropDownHandler(event) {
    this.props.onDropdownChange(event.target.value);
    this.setState({ value: event.target.value });
  }

  render() {
    const options = this.props.data.map(option => (
      <option
        key={option.id}
        value={option.value}
      >
        {option.content}
      </option>
    ));

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
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.str,
    value: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  onDropdownChange: PropTypes.func.isRequired,
};
