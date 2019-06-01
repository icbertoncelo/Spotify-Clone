import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import Sound from 'react-sound';

import { connect } from 'react-redux';

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = ({ player }) => (
  <Container>
    {!!player.currentSong && (
      <Sound
        url={player.currentSong.file}
        playStatus={player.status}
      />
    )}
    <Current>
      <img
        src="https://static.fnac-static.com/multimedia/Images/PT/NR/72/36/0c/800370/1540-1/tsp20160818085632/Amid-the-Noisette-and-Haste.jpg"
        alt="Soja"
      />
      <div>
        <span>I Believe</span>
        <small>SOJA</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button type="button">
          <img
            src={ShuffleIcon}
            alt="Shuffle"
          />
        </button>
        <button type="button">
          <img
            src={BackwardIcon}
            alt="Backward"
          />
        </button>
        <button type="button">
          <img
            src={PlayIcon}
            alt="Play"
          />
        </button>
        <button type="button">
          <img
            src={ForwardIcon}
            alt="Forward"
          />
        </button>
        <button type="button">
          <img
            src={RepeatIcon}
            alt="Repeat"
          />
        </button>
      </Controls>
      <Time>
        <span>1:43</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ED760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>3:56</span>
      </Time>
    </Progress>

    <Volume>
      <img
        src={VolumeIcon}
        alt="Volume"
      />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        handleStyle={{ display: 'none' }}
        value={100}
      />
    </Volume>
  </Container>
);

Player.propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      file: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps)(Player);
