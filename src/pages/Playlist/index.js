import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';

import { Container, Header, SongList } from './styles';
import Loading from '../../components/Loading';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    playlistDetails: PropTypes.shape({
      data: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        songs: PropTypes.arrayOf({
          id: PropTypes.number,
          title: PropTypes.string,
          author: PropTypes.string,
          album: PropTypes.string,
        }),
      }),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const {
      match: {
        params: { id },
      },
      getPlaylistDetailsRequest,
    } = this.props;

    getPlaylistDetailsRequest(id);
  };

  renderDetails = () => {
    const {
      playlistDetails: { data: playlist },
    } = this.props;

    return (
      <Container>
        <Header>
          <img
            src={playlist.thumbnail}
            alt={playlist.title}
          />

          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{playlist.songs.length} songs</p>}

            <button type="button">PLAY</button>
          </div>
        </Header>

        <SongList
          cellPadding={0}
          cellSpacing={0}
        >
          <thead>
            <th />
            <th>TITLE</th>
            <th>ARTIST</th>
            <th>ALBUM</th>
            <th>
              <img
                src={ClockIcon}
                alt="Duration"
              />
            </th>
          </thead>
          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>No musics registred</td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <tr key={song.id}>
                  <td>
                    <img
                      src={PlusIcon}
                      alt="Add"
                    />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>4:18</td>
                </tr>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    const {
      playlistDetails: { loading },
    } = this.props;
    return loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
});

// eslint-disable-next-line max-len
const mapDispatchToProps = dispatch => bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
