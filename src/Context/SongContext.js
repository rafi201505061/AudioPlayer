import CreateContext from './CreateContext';

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
        currentVolume:action.payload.volume
      }
    case 'set_current_time':
      return {
        ...state,
        currentTime:action.payload.currentTime
      }
    case 'set_duration':
      return {
        ...state,
        currentDuration:action.payload.currentDuration
      }
    case 'activate_audio_player':
      return {
        ...state,
        isAudioPlayerActive:true
      }
    default:
      return state;
  }
}

const selectSong = (dispatch) => {
  return (id)=>{
    dispatch({type:'select_song',payload:{id}})
  }
}

const playPause = (dispatch) => {
  return () => {
    dispatch({type:'play_or_pause'})
  }
}

const setCurrentTime = (dispatch) => {
  return (currentTime)=>{
    dispatch({type:'set_current_time',payload:{currentTime}})
  }
}

const setVolume = (dispatch) => {
  return (volume)=>{
    dispatch({type:'set_current_volume',payload:{volume}})
  }
}

const setCurrentDuration = (dispatch) => {
  return (currentDuration)=>{
    dispatch({type:'set_duration',payload:{currentDuration}})
  }
}

const setAudioPlayer = (dispatch)=>{
  return ()=>{
    dispatch({type:'activate_audio_player'})
  }
}
export const { Context, Provider } = CreateContext(
  reducer,
  {selectSong,playPause,setCurrentDuration,setCurrentTime,setVolume,setAudioPlayer},
  {
    songs: [{
      id: 0,
      isPlaying: true,
      songName: "Chill",
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
      imageUrl: "https://www.laurenswilliam.nl/wp-content/uploads/2016/09/Chill-music-update-1.jpeg"
    },
    {
      id: 1,
      songName: "Twist",
      isPlaying: false,
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      imageUrl: "https://thumbs-prod.si-cdn.com/Vj7Cmc62xkQLwQZLiX1SbOV89ik=/420x240/https://public-media.si-cdn.com/filer/cd/0e/cd0efbec-bc15-4f38-894a-7e0e6f5968b8/campfire_edit.jpg"
    },
    {
      id: 2,
      songName: "Free Bird",
      isPlaying: false,
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      imageUrl: "https://www.laurenswilliam.nl/wp-content/uploads/2016/09/Chill-music-update-1.jpeg"
    },
    {
      id: 3,
      songName: "Twister",
      isPlaying: false,
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
      imageUrl: "https://thumbs-prod.si-cdn.com/Vj7Cmc62xkQLwQZLiX1SbOV89ik=/420x240/https://public-media.si-cdn.com/filer/cd/0e/cd0efbec-bc15-4f38-894a-7e0e6f5968b8/campfire_edit.jpg"
    },
    {
      id: 4,
      songName: "Go Easy",
      isPlaying: false,
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
      imageUrl: "https://i.ytimg.com/vi/VJ52yJwN_K0/maxresdefault.jpg"
    }
    ],
    playing: false,
    currentTime: 0,
    currentVolume: 100,
    currentDuration: 0,
    isAudioPlayerActive:false
  }
)