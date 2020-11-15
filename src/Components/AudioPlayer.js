import React, { useState, Fragment, useContext, useEffect } from 'react';
import { CssBaseline, Grid, IconButton, Slider, Box, Typography, Hidden, Fade, Grow, Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Pause, VolumeDown } from '@material-ui/icons';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import { Context as ViewportContext } from '../Context/ViewportContext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import { motion } from 'framer-motion';


const useStyles = makeStyles({
  minimizedPlayer: {
    backgroundColor: '#fcedf2',
    margin: 0,
    zIndex: 1,
    flex: 1,
    maxHeight: "80px",
    height: "auto"
  },
  button: {
    color: '#ad0031',
    fontSize: 35,
    '&:hover': {
      fontSize: 40
    }
  },
  smallButton: {
    color: '#ad0031',
    fontSize: 20,
    '&:hover': {
      fontSize: 25
    }
  },
  volumeIcon: {
    fontSize: 20,
    color: '#ad0031',
    marginTop: 4,
    '&:hover': {
      fontSize: 25
    }
  },
  extraSmallIcon: {
    fontSize: 14,
    color: '#ad0031',
    '&:hover': {
      fontSize: 20
    }
  },
  beforeShuffle: {
    fontSize: 14,
    color: '#aba4a7',
    '&:hover': {
      fontSize: 20
    }
  },
  afterShuffle: {
    fontSize: 14,
    color: '#ad0031',
    '&:hover': {
      fontSize: 20
    }
  },
  album_art: {
    height: '96%',
    width: '96%'
  }
})
const AudioPlayer = () => {
  const classes = useStyles();
  const [isPlaying, setIsPlaying] = useState(false);
  const [prevVolume, setPrevVolume] = useState(100);
  const [volume, setVolume] = useState(100);
  const [isMute, setIsMute] = useState(false);
  const { windowSize } = useContext(ViewportContext);
  const [nameFontSize, setNameFontSize] = useState(14);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [showList, setShowList] = useState(false);


  useEffect(() => {
    if (windowSize.width < 1200)
      setNameFontSize(10);
    else if (windowSize.width >= 1200 && windowSize.width < 1400) {
      setNameFontSize(12)
    }
    else
      setNameFontSize(14);
  }, [windowSize]);

  const handleMute = () => {
    setIsMute(prev => !prev);
    if (!isMute) {
      setPrevVolume(volume);
      setVolume(0);
    } else {
      setVolume(prevVolume);
    }
  }
  const handleVolumeChange = (event, newVal) => {
    setVolume(newVal);
    if (newVal === 0) {
      setIsMute(true);
      setPrevVolume(volume);
    } else {
      setIsMute(false);
    }
  }

  return <Fragment>
    <CssBaseline />
    <Grid container justify='flex-end' direction='column' style={{
      minHeight: "100vh",
      height: "auto"
    }}>

      <Slide direction="up" in={showList} mountOnEnter unmountOnExit>
        <div style={{ position: 'absolute', top: 0, bottom: 0, height: '100%', width: '100%', backgroundColor: '#aba4a7' }}
        >
          <p>dhsjkn</p>
        </div>
      </Slide>


      <Box component={Grid} container boxShadow={3}  >
        <Slider
          style={{ backgroundColor: '#fcedf2', color: '#ad0031', height: 1, borderWidth: 5, borderColor: 'black' }}
          aria-labelledby="continuous-slider"
        />
        {/* <div style={{ position: 'relative' }}>
            <div style={{ height: 5, backgroundColor: '#d46a94', width: '100%' }}></div>
            <div
               style={{ height: 5, backgroundColor: '#ad0031', width: '60%', top: 0, position: 'absolute' }}
            ></div>

         </div> */}
        {/* <input style={{ width: '100%', height: 5 }} borderRadius={0} backgroundColor='#d46a94' type='range' min={0} max={100} /> */}
        <Box component={Grid} container item className={classes.minimizedPlayer}>
          <Grid item container xs={12}>
            <Grid item container xs={3}>
              <Grid onClick={() => setShowList(prev => !prev)} container item xs={6} md={6} lg={4} justify='center' alignContent='center' style={{ backgroundColor: '#fcedf2' }}  >
                <img src="https://i.ytimg.com/vi/VJ52yJwN_K0/maxresdefault.jpg" alt="album" className={classes.album_art} />
              </Grid>
              <Grid container item xs={4} md={4} justify='center'>
                <Typography variant="button" display="block" gutterBottom style={{ color: '#ad0031', fontWeight: 'bold', fontSize: nameFontSize }}>
                  Cheap Thrills
                  </Typography>
              </Grid>
            </Grid>

            <Grid item container xs={9} direction='column' justify='space-between'>
              <Grid container item xs={10} justify='space-around' alignItems='center'>
                {/* control panel */}
                <Grid container item xs={7} justify='center'>
                  {/* previous button */}
                  <Grid container item xs={2} justify='center' alignItems='center'>
                    <Fade
                      in={true}
                      timeout={{
                        appear: 5000,
                        enter: 5000,
                        exit: 5000
                      }}
                    >
                      <SkipPreviousIcon className={classes.smallButton}
                      />
                    </Fade>
                  </Grid>
                  {/* play or pause */}
                  <Grid item xs={2}>

                    {
                      isPlaying
                        ? <Fade
                          in={isPlaying}
                          timeout={{
                            appear: 5000,
                            enter: 5000,
                            exit: 5000
                          }}
                        >
                          <Pause className={classes.button} onClick={() => setIsPlaying(prev => !prev)} />
                        </Fade>
                        : <Fade
                          in={!isPlaying}
                          timeout={{
                            appear: 5000,
                            enter: 5000,
                            exit: 5000
                          }}
                        >
                          <PlayArrowIcon className={classes.button} onClick={() => setIsPlaying(prev => !prev)} />
                        </Fade>
                    }
                  </Grid>
                  {/* next button */}
                  <Grid container item xs={2} justify='center' alignItems='center'>
                    <SkipNextIcon className={classes.smallButton} />
                  </Grid>
                  <Grid container item xs={1} justify='center' alignItems='center'>
                    {
                      shuffle
                        ? <ShuffleIcon onClick={() => setShuffle(prev => !prev)} className={classes.afterShuffle} />
                        : <ShuffleIcon onClick={() => setShuffle(prev => !prev)} className={classes.beforeShuffle} />
                    }

                  </Grid>
                  <Grid container item xs={1} justify='center' alignItems='center'>
                    {
                      repeat
                        ? <RepeatOneIcon onClick={() => setRepeat(prev => !prev)} className={classes.extraSmallIcon} />
                        : <RepeatIcon onClick={() => setRepeat(prev => !prev)} className={classes.extraSmallIcon} />
                    }

                  </Grid>
                </Grid>
                {/* volume control */}
                <Grid item xs={5} container alignItems='flex-start' justify='center' spacing={4}>
                  {/* volume icon */}
                  <Grid item container xs={2} sm={1} md={1} justify='center'>
                    {
                      isMute
                        ? <VolumeOffIcon onClick={handleMute} className={classes.volumeIcon} />
                        : <VolumeDown onClick={handleMute} className={classes.volumeIcon} />
                    }
                  </Grid>
                  {/* volume slider */}
                  <Grid item container xs={5} sm={6} md={6} justify='center'>
                    <Slider
                      value={volume}
                      style={{ color: '#ad0031' }}
                      onChange={handleVolumeChange}
                      aria-labelledby="continuous-slider"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* </Grid> */}
        </Box>
      </Box>
    </Grid>
  </Fragment>

}

export default AudioPlayer;