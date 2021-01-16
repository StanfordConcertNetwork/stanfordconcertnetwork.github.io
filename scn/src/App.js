import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import UpcomingShows from './components/UpcomingShows';
import MusicCard from './components/MusicCard';
import background from './assets/videos/odesza.mp4';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: 'url(' + background + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <UpcomingShows />
      <MusicCard />
    </div>
  );
}
