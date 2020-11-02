import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PauseIcon from '@material-ui/icons/Pause';
import useInterval from '../useInterval';
import SongList from './SongList';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import { Context } from '../Context/SongContext';
import Button from '@material-ui/core/Button';


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
  bar: {
    justifyContent: 'center'
  },
  slider: {
    marginRight: 3
  }
}));


const MediaControlCard = ({ history }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [progress, setProgress] = useState(0);
  const audioPlayerRef = React.useRef(null);
  const [forcedProgress, setForcedProgress] = useState(0);
  const [isFirst, setFirst] = useState(true);

  const { state, playPause, selectSong, setCurrentDuration, setCurrentTime, setVolume, setAudioPlayer } = useContext(Context);
useEffect(() => {
    setProgress(state.currentTime / (state.currentDuration));
  }, [])
  const Mod = (dividend, divisor) => {
    if (dividend < 0) {
      return (dividend + divisor);
    } else {
      return dividend % divisor;
    }
  }
  const songSelection = (id_current_song, prev_or_next) => {
    console.log("title:" + state.songs[id_current_song].songName);
    console.log("url:" + state.songs[id_current_song].src);
    console.log("elapsed time:" + audioPlayerRef.current.currentTime);
    selectSong(Mod(id_current_song + prev_or_next, 5));
  }
  useEffect(() => {
    if (audioPlayerRef && audioPlayerRef.current) {

      if (state.playing) {
        audioPlayerRef.current.play();
      } else {
        audioPlayerRef.current.pause();
      }
    }
  }
    , [state.playing])
  useEffect(() => {
    if (audioPlayerRef && audioPlayerRef.current) {
      if (state.playing) {
        audioPlayerRef.current.play();
      } else {
        audioPlayerRef.current.pause();
      }
    }
  }
    , [state.songs])

  useEffect(() => {
    if (audioPlayerRef && audioPlayerRef.current) {
      audioPlayerRef.current.volume = state.currentVolume / 100;
    }
  }, [state.currentVolume])

  useEffect(() => {
    if (audioPlayerRef && audioPlayerRef.current) {
      if (isFirst) {
        audioPlayerRef.current.currentTime = state.currentTime;
        audioPlayerRef.current.currentDuration = state.currentDuration;
        setFirst(false);
      } else {
        audioPlayerRef.current.currentTime = (forcedProgress / 100) * (state.currentDuration);
        setProgress(((audioPlayerRef.current.currentTime / audioPlayerRef.current.duration) * 100));
        setCurrentTime(audioPlayerRef.current.currentTime);
        setCurrentDuration(audioPlayerRef.current.duration);
      }

    }
  }, [forcedProgress]);
  useInterval(() => {
    if (audioPlayerRef && audioPlayerRef.current) {
      if (isFirst) {
        audioPlayerRef.current.currentTime = state.currentTime;
        audioPlayerRef.current.currentDuration = state.currentDuration;
        setFirst(false);
      } else {
        setProgress((audioPlayerRef.current.currentTime / audioPlayerRef.current.duration) * 100);
        setCurrentTime(audioPlayerRef.current.currentTime);
        setCurrentDuration(audioPlayerRef.current.duration);
      }

    }
  }, 200);

  const setTime = (val) => {
    const min = (val / 60).toFixed(0).toString();
    const second = (val % 60).toFixed(0).toString();
    return min + ":" + second;
  }

  const handleVolume = (event, newValue) => {
    setVolume(newValue);
  };


  const currentSong = state.songs.filter(item => item.isPlaying === true)[0];
  return (
    <div className={classes.rootC}>
      <div style={{ flex: 1, borderRadius: 5 }}>
        <audio
          ref={audioPlayerRef}
          src={currentSong.src}
          type="audio/mp3"
        />
        <Card className={classes.root}>
          <div>
            <img
              style={{ width: '95%', height: window.innerHeight * .73, flex: 1 }}
              src={currentSong.imageUrl}
              alt={currentSong.songName}

            />
          </div>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h4" variant="h4" style={{ fontWeight: 'bold', color: '#d900bd' }}>
                {currentSong.songName}
              </Typography>
            </CardContent>
            <Grid container spacing={1} className={classes.bar}>
              <Grid item xs={12} sm={12}>
                <Slider value={progress} onChange={(event, newVal) => setForcedProgress(newVal)} aria-labelledby="continuous-slider" style={{ margin: 10 }} />
              </Grid>
              {/* <Grid item xs={12} sm={1} className={classes.bar}>
                {setTime(currentTime)}/{setTime(duration)}
              </Grid> */}
            </Grid>

            <Grid container className={classes.controls}>
              <Grid item xs={8}>
                <IconButton aria-label="previous" onClick={() => {
                  songSelection(currentSong.id, -1);
                }}>
                  {theme.direction === 'rtl' ? <SkipNextIcon style={{ color: '#d900bd' }} /> : <SkipPreviousIcon style={{ color: '#d900bd' }} />}
                </IconButton>
                <IconButton aria-label="play/pause" onClick={() => playPause()}>
                  {
                    state.playing
                      ? <PauseIcon className={classes.playIcon} style={{ color: '#d900bd' }} />
                      : <PlayArrowIcon className={classes.playIcon} style={{ color: '#d900bd' }} />
                  }
                </IconButton>
                <IconButton aria-label="next" onClick={() => {
                  songSelection(currentSong.id, 1);
                }}>
                  {theme.direction === 'rtl' ? <SkipPreviousIcon style={{ color: '#d900bd' }} /> : <SkipNextIcon style={{ color: '#d900bd' }} />}
                </IconButton>
              </Grid>

              <Grid item xs={4} style={{ width: 400, alignItems: 'center', justifyContent: 'center' }}>
                <Grid container spacing={1}>
                  <Grid item xs={2}>
                    <VolumeDown />
                  </Grid>
                  <Grid item xs={10}>
                    <Slider value={state.currentVolume} onChange={handleVolume} aria-labelledby="continuous-slider" className={classes.slider} />
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </div>
          <Button variant="contained" color="secondary" onClick={() => {
            setAudioPlayer();
            history.push('/');
          }}>
            Minimize Audio Player
      </Button>
        </Card>
      </div>
      <div style={{ flex: .2 }}>
        <SongList
          data={state.songs}
          onClick={(id) => {
            selectSong(id);
          }}
        />
      </div>
    </div>

  );
}
export default withRouter(MediaControlCard);