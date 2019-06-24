import React from 'react';
import { connect } from 'react-redux';
import getVideo from '../api/getVideo';
import splitPlaylistId from '../helpers/urlHelper';
import { setPlaylist, setError } from '../actions';

class Input extends React.Component {
  state = {
    inputLink: 'https://www.youtube.com/playlist?list=PLPxbbTqCLbGE5AihOSExAa4wUM-P42EIJ',
    inputCount: '',
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { inputLink, inputCount } = this.state;
    const playlistId = splitPlaylistId(inputLink);
    const inputCountChecked = inputCount || 50;
    const youtubePlaylist = await getVideo(playlistId, inputCountChecked);
    const responseStatus = youtubePlaylist ? false : true;
    this.props.setError(responseStatus);
    this.props.setPlaylist(youtubePlaylist, playlistId);
  };

  render() {
    return (
      <form className="input" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="inputLink"
          placeholder="Please enter playlist url"
          value={this.state.inputLink}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="inputCount"
          placeholder="Please enter number of videos (default: all)"
          value={this.state.inputCount}
          onChange={this.handleChange}
        />
        <button type="submit">Get Playlist</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setPlaylist: (youtubePlaylist, playlistId) =>
      dispatch(setPlaylist(youtubePlaylist, playlistId)),
    setError: error => dispatch(setError(error)),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Input);
