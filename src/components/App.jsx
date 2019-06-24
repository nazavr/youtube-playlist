import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import React from 'react';
import Input from './Input';
import Player from './Player';
import List from './List';
import Error from './Error';

const App = props => (
  <div className="app-wrapper">
    <React.Fragment>
      <Input />
      {!props.isError && props.list.length > 0 && (
        <div className="content-inner-wrap">
          <Player />
          <List />
        </div>
      )}
    </React.Fragment>
    {props.isError && <Error />}
  </div>
);

App.defaultProps = {
  isError: false,
  list: [],
};

App.propTypes = {
  isError: PropTypes.bool,
  list: PropTypes.any,
};

const mapStateToProps = state => ({
  isError: state.error.isError,
  list: state.playlist.items,
});

export default connect(
  mapStateToProps,
  null,
)(App);
