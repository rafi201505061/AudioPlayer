import React, { useState, useEffect, useReducer } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PauseIcon from '@material-ui/icons/Pause';
import ViewListIcon from '@material-ui/icons/ViewList';
import SimpleCard from './SimpleCard';
import SongList from './SongList';

const useStyles = makeStyles((theme) => ({
  rootC: {
    display: 'flex',
    flexDirection: 'row'
  },
  root: {
    flex: 1
  },
  details: {
    flex: 2
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const songs = [{
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
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'select_song':
      var songs = [];
      state.forEach(item => {
        if (action.payload.id !== item.id) {
          songs.push({ ...item, isPlaying: false })
        } else {
          songs.push({ ...item, isPlaying: true })
        }
      })
      return songs;
    default:
      return state
  }
}
export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();
  const [allsongs, dispatch] = useReducer(reducer, [...songs]);
  const audioPlayerRef = React.useRef(null);
  const [playing, setPlaying] = useState(false);

  const Mod = (dividend, divisor) => {
    if (dividend < 0) {
      return (dividend + divisor);
    } else {
      return dividend % divisor;
    }
  }
  const songSelection = (id_current_song, prev_or_next) => {
    console.log("title:" + songs[id_current_song].songName);
    console.log("url:" + songs[id_current_song].src);
    console.log("elapsed time:" + audioPlayerRef.current.currentTime);
    dispatch({type:'select_song',payload:{id:Mod(id_current_song+prev_or_next,5)}})
  }
  useEffect(() => {
    if (audioPlayerRef && audioPlayerRef.current) {
      if (playing) {
        audioPlayerRef.current.play();
      } else {
        audioPlayerRef.current.pause();
      }
    }
  }
    , [playing, allsongs])

  const currentSong = allsongs.filter(item => item.isPlaying === true)[0];
  return (
    <div className={classes.rootC}>
      <div style={{ flex: 1,borderRadius:5 }}>
        <audio
          ref={audioPlayerRef}
          src={currentSong.src}
          type="audio/mp3"
        />
        <Card className={classes.root}>
          <div style={{ flex: 8 }}>
            <img
              style={{ width: window.innerWidth * .8,border:'3px solid #d900bd', height: window.innerHeight * .795, flex: 1,borderRadius:20 }}
              src={currentSong.imageUrl}
              alt={currentSong.songName}
              
            />
          </div>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h4" variant="h4" style={{fontWeight:'bold',color:'#d900bd'}}>
                {currentSong.songName}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <IconButton aria-label="previous" onClick={() => {
                songSelection(currentSong.id,-1);
              }}>
                {theme.direction === 'rtl' ? <SkipNextIcon style={{color:'#d900bd'}}/> : <SkipPreviousIcon style={{color:'#d900bd'}}/>}
              </IconButton>
              <IconButton aria-label="play/pause" onClick={() => setPlaying(prev => !prev)}>
                {
                  playing
                    ? <PauseIcon className={classes.playIcon} style={{color:'#d900bd'}}/>
                    : <PlayArrowIcon className={classes.playIcon} style={{color:'#d900bd'}} />
                }
              </IconButton>
              <IconButton aria-label="next" onClick={() => {
                songSelection(currentSong.id,1);
              }}>
                {theme.direction === 'rtl' ? <SkipPreviousIcon style={{color:'#d900bd'}}/> : <SkipNextIcon style={{color:'#d900bd'}}/>}
              </IconButton>
            </div>
          </div>
        </Card>
      </div>
      <div style={{ flex: .2 }}>
        <SongList
          data={allsongs}
          onClick={(id)=>{
            dispatch({ type: 'select_song', payload: {id} });
          }}
        />
      </div>
    </div>

  );
}
