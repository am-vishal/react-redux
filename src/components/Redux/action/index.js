export const selectSong = (song) => {
  //return an acrion
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
