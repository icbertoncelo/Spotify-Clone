import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylstDetailsActions } from '../ducks/playlistDetails';

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(api.get, `playlists/${action.payload.id}?_embed=songs`);

    yield put(PlaylstDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
