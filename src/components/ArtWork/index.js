import ArtWork from "./component.jsx";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    albumImage: state.songsReducer.songDetails
      ? state.songsReducer.songDetails.album.images[0].url
      : ""
  };
};

export default connect(mapStateToProps)(ArtWork);
