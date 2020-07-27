import axios from 'axios';
import { GHActivity } from './types';

const API_URL = 'https://api.github.com/users';

async function requestActivities(
  username,
  { onStart, onEnd, onSuccess, onFailed }
) {
  onStart();
  try {
    const response = await axios.get(`${API_URL}/${username}/events`);
    const data: Array<GHActivity> = response.data;
    onSuccess(data);
  } catch (error) {
    onFailed(null);
  } finally {
    onEnd();
  }
}

export default requestActivities;
