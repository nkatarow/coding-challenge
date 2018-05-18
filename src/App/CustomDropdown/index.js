import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CustomDropdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.change = this.change.bind(this);
  }

  change(event) {
    this.setState({ value: event.target.value });
    console.log(event.target.value);
  }

  render() {
    const options = this.props.data.map(option =>
      <option key={option.id} value={option.value}>{option.content}</option>,
    );

    return (
      <select onChange={this.change} value={this.state.value}>
        { options }
      </select>
    );
  }
}

CustomDropdown.defaultProps = {

};

CustomDropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.str,
    value: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};
