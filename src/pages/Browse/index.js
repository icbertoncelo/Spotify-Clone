import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import Loading from '../../components/Loading';

import {
  Container, Title, List, Playlist,
} from './styles';

class Browse extends Component {
  static propTypes = {
    getPlaylisRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          thumbnail: PropTypes.string,
          description: PropTypes.string,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const { getPlaylisRequest } = this.props;
    getPlaylisRequest();
  }

  render() {
    const { playlists } = this.props;

    return (
      <Container>
        <Title>Browse{playlists.loading && <Loading />}</Title>

        <List>
          {playlists.data.map(playlist => (
            <Playlist to={`/playlists/${playlist.id}`}>
              <img
                src={playlist.thumbnail}
                alt={playlist.title}
              />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Browse);