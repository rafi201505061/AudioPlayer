import CreateContext from './CreateContext';
let songsData = require('../data/songs.json');


const initialState = {
  songs: songsData.songs,
  playing: false,
  repeat: false,
  shuffle: false,
  currentTime: 0,
  currentVolume: 100,
  currentDuration: 0,
  isAudioPlayerActive: false
}
const Mod = (dividend, divisor) => {
  if (dividend < 0) {
    return (dividend + divisor);
  } else {
    return dividend % divisor;
  }
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'select_song':
      var songs = [];
      state.songs.forEach(item => {
        if (action.payload.id !== item.id) {
          songs.push({ ...item, isPlaying: false })
        } else {
          songs.push({ ...item, isPlaying: true })
        }
      })
      return {
        ...state,
        songs,
        currentTime: 0,
        currentDuration: 0
      };
    case 'play_or_pause':
      return { ...state, playing: !state.playing };
    case 'set_current_volume':
      return {
        ...state,
        currentVolume: action.payload.volume
      }
    case 'set_current_time':
      return {
        ...state,
        currentTime: action.payload.currentTime
      }
    case 'set_duration':
      return {
        ...state,
        currentDuration: action.payload.currentDuration
      }
    case 'activate_audio_player':
      return {
        ...state,
        isAudioPlayerActive: true
      }
    case 'set_repeat':
      return {
        ...state,
        repeat: true
      }
    case 'set_shuffle':
      return {
        ...state,
        shuffle: true
      }
    default:
      return state;
  }
}

const selectSong = (dispatch) => {
  return (id) => {
    dispatch({ type: 'select_song', payload: { id } })
  }
}

const playPause = (dispatch) => {
  return () => {
    dispatch({ type: 'play_or_pause' })
  }
}

const setCurrentTime = (dispatch) => {
  return (currentTime) => {
    dispatch({ type: 'set_current_time', payload: { currentTime } })
  }
}

const setVolume = (dispatch) => {
  return (volume) => {
    dispatch({ type: 'set_current_volume', payload: { volume } })
  }
}

const setCurrentDuration = (dispatch) => {
  return (currentDuration) => {
    dispatch({ type: 'set_duration', payload: { currentDuration } })
  }
}

const setAudioPlayer = (dispatch) => {
  return () => {
    dispatch({ type: 'activate_audio_player' })
  }
}
export const { Context, Provider } = CreateContext(
  reducer,
  { selectSong, playPause, setCurrentDuration, setCurrentTime, setVolume, setAudioPlayer },
  {

  }
)