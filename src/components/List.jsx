import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPlaylistItem } from '../actions';

const List = props => {
  const { items, setItem, selectedVideoId, nextVideoId } = props;

  const currentID = selectedVideoId || nextVideoId || items[0].resourceId.videoId;

  const listItems = items.map((item, index) => {
    const isSelected = item.resourceId.videoId === currentID;

    return (
      <div
        className={`list-wrapper ${isSelected ? 'active' : ''}`}
        role="button"
        tabIndex="0"
        aria-label="Click"
        key={item.resourceId.videoId}
        onClick={() => setItem(item)}
        onKeyDown={() => setItem(item)}
      >
        <div className="list-item-index">{index + 1}</div>
        <div className="image-wrap">
          <img src={item.thumbnails.medium.url} alt="playlist-img" />
        </div>
        <div className="info-wrap">
          <h3>{item.title}</h3>
          <p>{item.channelTitle}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="playlists-wrap">
      <div>{listItems}</div>
    </div>
  );
};

List.defaultProps = {
  items: [],
  setItem: {},
  nextVideo: {},
};

List.propTypes = {
  items: PropTypes.array,
  setItem: PropTypes.func,
  selectedVideoId: PropTypes.string,
  nextVideo: PropTypes.object,
};

const mapStateToProps = state => ({
  items: state.playlist.items,
  selectedVideoId:
    state.playlist.selectedItem &&
    state.playlist.selectedItem.resourceId &&
    state.playlist.selectedItem.resourceId.videoId,
  nextVideoId:
    state.nextVideo && state.nextVideo.nextVideoData && state.nextVideo.nextVideoData.video_id,
});

const mapDispatchToProps = dispatch => ({
  setItem: item => dispatch(setPlaylistItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
