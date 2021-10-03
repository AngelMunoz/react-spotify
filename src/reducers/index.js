import { combineReducers } from "redux";
import userReducer from './userReducer.js';
import tokenReducer from './tokenReducer.js';
import playlistReducer from './playlistReducer.js';
import songsReducer from './songsReducer.js';
import albumsReducer from './albumsReducer.js';
import artistsReducer from './artistsReducer.js';
import uiReducer from './uiReducer.js';
import browseReducer from './browseReducer.js';
import soundReducer from './soundReducer.js';

export default combineReducers({
  userReducer,
  tokenReducer,
  playlistReducer,
  songsReducer,
  albumsReducer,
  artistsReducer,
  uiReducer,
  browseReducer,
  soundReducer
});
