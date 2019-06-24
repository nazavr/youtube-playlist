import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';

class Player extends React.PureComponent {
  render() {
    const { playlistId, items, selectedItem } = this.props;
    const firstVideoId = items.length ? items[0].resourceId.videoId : '';
    const selectedVideoId =
      selectedItem && selectedItem.resourceId && selectedItem.resourceId.videoId;
    const firstVideoTitle = items.length ? items[0].title : '';
    const selectedTitle = selectedItem && selectedItem.title;

    const opts = {
      playerVars: {
        listType: 'playlist',
        list: playlistId,
        autoplay: 1,
        loop: 1,
      },
    };

    return (
      <div className="player-wrap">
        <div className="player-title">{selectedTitle || firstVideoTitle}</div>
        <YouTube videoId={selectedVideoId || firstVideoId} opts={opts} />
      </div>
    );
  }
}

Player.defaultProps = {
  playlistId: '',
  items: [],
  selectedItem: {},
};

Player.propTypes = {
  playlistId: PropTypes.string,
  items: PropTypes.array,
  selectedItem: PropTypes.object,
};

const mapStateToProps = state => ({
  playlistId: state.playlist.playlistId,
  items: state.playlist.items,
  selectedItem: state.playlist.selectedItem,
});

export default connect(
  mapStateToProps,
  null,
)(Player);
