import TrackSearch from "./component.jsx";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchSongs } from '../../actions/songActions.js';

const mapStateToProps = (state) => {

  return {
    token: state.tokenReducer.token
  };

};

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    searchSongs,
  }, dispatch);

};
export default connect(mapStateToProps, mapDispatchToProps)(TrackSearch);
