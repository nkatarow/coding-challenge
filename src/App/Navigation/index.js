import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import CustomDropdown from '../CustomDropdown';

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
  constructor(props) {
    super(props);

    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleDropdownChange(value) {
    const { history } = this.props;
    history.push(`${value}`);
  }

  render() {
    return (
      <nav>
        <CustomDropdown
          data={navigationData}
          onDropdownChange={this.handleDropdownChange}
        />
      </nav>
    );
  }
}

Navigation.propTypes = {
  history: PropTypes.shape().isRequired,
};


export default withRouter(Navigation);
