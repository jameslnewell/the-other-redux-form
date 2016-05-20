import React from 'react';
import {connect} from 'react-redux';

import ConnectedField from './ConnectedField';
import createMapStateToProps from './createMapStateToProps';
import createMapDispatchToProps from './createMapDispatchToProps';

export default options => {

  const Component = connect(
    createMapStateToProps(options),
    createMapDispatchToProps(options),
    null,
    {withRef: true}
  )(ConnectedField);

  //props required by mapStateToProps() and mapDispatchToProps()
  Component.defaultProps = {
    defaultValue: ''
  };

  return Component;
};
