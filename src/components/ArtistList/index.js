import AlbumList from "./component.jsx";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchArtistSongs } from "../../actions/artistActions.js";
import { updateHeaderTitle } from "../../actions/uiActions.js";

const mapStateToProps = state => {
  return {
    token: state.tokenReducer.token ? state.tokenReducer.token : "",
    artists: state.artistsReducer.artistList
      ? state.artistsReducer.artistList.artists
      : ""
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchArtistSongs,
      updateHeaderTitle
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
