import React from "react";
import PropTypes from "prop-types";
import SongList from "../SongList/index.js";
import AlbumList from "../AlbumList/index.js";
import ArtistList from "../ArtistList/index.js";
import BrowseView from "../BrowseView/index.js";
import "./MainView.css";

const MainView = ({ headerTitle, audioControl, resumeSong, pauseSong }) => {
  return (
    <React.Fragment>
      {headerTitle === "Albums" ? (
        <AlbumList audioControl={audioControl} />
      ) : headerTitle === "Artists" ? (
        <ArtistList />
      ) : headerTitle === "Browse" ? (
        <BrowseView />
      ) : (
        //anything else show SongList
        <SongList
          resumeSong={resumeSong}
          pauseSong={pauseSong}
          audioControl={audioControl}
        />
      )}
    </React.Fragment>
  );
};

MainView.propTypes = {
  headerTitle: PropTypes.string,
  audioControl: PropTypes.func,
  resumeSong: PropTypes.func,
  pauseSong: PropTypes.func
};

export default MainView;
