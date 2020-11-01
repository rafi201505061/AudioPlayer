import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
  inline: {
    display: 'inline',
  }
});

const SimpleCard = ({name,imageUrl,onClick,isActive}) => {
  return (
    <div onClick={onClick} style={{backgroundColor:isActive?'grey':'white'}}>
         <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="album art" src={imageUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
        />
      </ListItem>
    </div>
 
  )
}

export default SimpleCard;
