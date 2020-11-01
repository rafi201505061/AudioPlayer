import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import SimpleCard from './SimpleCard';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  }
}));

const SongList = ({data,onClick}) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {
        data.map(item=><div key={item.id}><SimpleCard
            name={item.songName}
            imageUrl={item.imageUrl}
            onClick={()=>onClick(item.id)}
            isActive={item.isPlaying}
          />
          <Divider variant="inset" component="li" />
        </div>)
      }
      
    </List>
  );
}
export default SongList;
