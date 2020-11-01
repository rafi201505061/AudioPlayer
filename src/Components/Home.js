import React from 'react';
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <div>
    <h1>
      Hello! This is a music player app.To use the music player click <Link to='/musicplayer'>Here</Link>
    </h1>
  </div>
  )
}
export default Home;