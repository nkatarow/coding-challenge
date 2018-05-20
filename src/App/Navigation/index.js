import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import CustomDropdown from '../CustomDropdown';

// Our test data that will generate the dropdown
const navigationData = [
  {
    id: shortid.generate(),
    value: '/',
    content: 'Project Description',
  },
  {
    id: shortid.generate(),
    value: '/form',
    content: 'Form',
  },
  {
    id: shortid.generate(),
    value: '/filter',
    content: 'Filter',
  },
];


class Navigation extends PureComponent {
  // When the dropdown changes, push the selected value into history, triggering react router to update our content
  handleDropdownChange = (value) => {
    const { history } = this.props;
    history.push(`${value}`);
  }

  render() {
    return (
      <nav>
        {/* Call an instance of the CustomDropdown component and pass in our data and method */}
        <CustomDropdown
          data={navigationData}
          onDropdownChange={this.handleDropdownChange}
        />
      </nav>
    );
  }
}

// Make sure the history prop we're receiving is an object
Navigation.propTypes = {
  history: PropTypes.shape().isRequired,
};


export default withRouter(Navigation);
