import axios from 'axios';

const API = 'AIzaSyAV1P1BWgWEnmAR0rJg3ukBerNkVjzxjFs';

const getVideo = async (playlistId, playlistCount) => {
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${API}&maxResults=${playlistCount}`;
  try {
    const { data, status } = await axios.get(url);
    if (status === 200) {
      return data.items.map(obj => obj.snippet);
    }
  } catch (e) {
    return false;
  }
  return false;
};

export default getVideo;
