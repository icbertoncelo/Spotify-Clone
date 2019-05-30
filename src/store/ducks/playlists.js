export const Types = {
  GET_REQUEST: 'playlists/GET_REQUEST',
  GET_SECCESS: 'playlists/GET_SECCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SECCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getPlaylisRequest: () => ({
    type: Types.GET_REQUEST,
  }),
  getPlaylisSuccess: data => ({
    type: Types.GET_SECCESS,
    payload: { data },
  }),
};
