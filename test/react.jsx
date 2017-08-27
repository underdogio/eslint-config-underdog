import PropTypes from 'prop-types';
import React from 'react';

class TestComponent extends React.Component {
  render () {
    const {message} = this.props;

    return (
      <div>
        {message}
      </div>
    );
  }
}

TestComponent.propTypes = {
  message: PropTypes.string
};

export default TestComponent;
