import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import { setNextVideo } from '../actions';

class Player extends React.PureComponent {
  state = {
    setNextVideo: this.props.setNextVideo,
  };

  endVideo = event => {
    const nextVideoData = event.target.getVideoData();
    this.state.setNextVideo(true, nextVideoData);
  };

  render() {
    const { playlistId, items, selectedItem, nextVideoData } = this.props;
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
        <div className="player-title">
          {nextVideoData.title || selectedTitle || firstVideoTitle}
        </div>
        <YouTube videoId={selectedVideoId || firstVideoId} opts={opts} onEnd={this.endVideo} />
      </div>
    );
  }
}

Player.defaultProps = {
  playlistId: '',
  items: [],
  selectedItem: {},
  setNextVideo: {},
};

Player.propTypes = {
  playlistId: PropTypes.string,
  items: PropTypes.array,
  selectedItem: PropTypes.object,
  setNextVideo: PropTypes.any,
};

const mapStateToProps = state => ({
  playlistId: state.playlist.playlistId,
  items: state.playlist.items,
  selectedItem: state.playlist.selectedItem,
  nextVideoData: state.nextVideo.nextVideoData,
});

const mapDispatchToProps = dispatch => ({
  setNextVideo: (isNext, nextVideoData) => dispatch(setNextVideo(isNext, nextVideoData)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);
