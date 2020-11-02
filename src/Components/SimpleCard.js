import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { borders } from '@material-ui/system';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles({
  inline: {
    display: 'inline',
  },
  avatar: {
    borderColor: 'red'
  }
});

const SimpleCard = ({ name, imageUrl, onClick, isActive }) => {
  return (
    <div onClick={onClick} style={{ backgroundColor: isActive ? '#fcc0f0' : 'white',borderRadius:15,margin:2.5 }}>
      <ListItem alignItems="flex-start" justifyContent="center">

        <img src={imageUrl} style={{height:40,width:40,borderRadius:80,alignSelf:'center',border:'2px solid #0893a6',margin:10}}/>
        
        <h4 style={{alignSelf:'center',fontSize:16,color:"#0893a6"}}>{name}</h4>
      </ListItem>
    </div>

  )
}

export default SimpleCard;
