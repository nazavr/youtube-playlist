const splitPlaylistId = playlist => {
  const LIST = 'list=';
  const to = playlist.search(LIST);
  const from = playlist.length;
  const playlistId = playlist.substring(from, to + LIST.length);
  return playlistId;
};

export default splitPlaylistId;
