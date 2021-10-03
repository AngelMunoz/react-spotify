import React from "react";
import PropTypes from "prop-types";
import SongControls from "../SongControls/index.js";
import VolumeControls from "../VolumeControls/index.js";
import "./Footer.css";

const Footer = ({ stopSong, pauseSong, resumeSong, audioControl }) => (
  <div className="footer">
    <SongControls
      stopSong={stopSong}
      pauseSong={pauseSong}
      resumeSong={resumeSong}
      audioControl={audioControl}
    />
    <VolumeControls />
  </div>
);


Footer.propTypes = {
  stopSong: PropTypes.func,
  pauseSong: PropTypes.func,
  resumeSong: PropTypes.func,
  audioControl: PropTypes.func
};

export default Footer;
