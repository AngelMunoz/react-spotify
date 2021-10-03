import SideMenu from "./component.jsx";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSongs, fetchRecentlyPlayed, updateViewType } from '../../actions/songActions.js';
import { fetchAlbums } from '../../actions/albumActions.js';
import { fetchArtists } from '../../actions/artistActions.js';
import { fetchFeatured } from '../../actions/browseActions.js';
import { updateHeaderTitle } from '../../actions/uiActions.js';

const mapStateToProps = (state) => {

  return {
    userId: state.userReducer.user ? state.userReducer.user.id : '',
    token: state.tokenReducer.token ? state.tokenReducer.token : '',
    artistIds: state.artistsReducer.artistIds,
    title: state.uiReducer.title
  };

};

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    fetchRecentlyPlayed,
    fetchSongs,
    fetchAlbums,
    fetchArtists,
    fetchFeatured,
    updateViewType,
    updateHeaderTitle,
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
