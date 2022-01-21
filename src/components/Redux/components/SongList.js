// /* eslint-disable array-callback-return */
import React from 'react';
import {connect} from 'react-redux';

const SongList = (props) => {
  const onClickHandler = () => {
    console.log('first');
  };
  return (
    <div>
      {props.songs.map((song, index) => {
        return (
          <div key={index} className="w-50 m-2 border" style={{cursor: 'pointer'}}>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                {song.title}
                <span className="badge badge-primary badge-pill">{song.length}</span>
              </li>
            </ul>
          </div>
        );
      })}
      <button onClick={onClickHandler}>Select a Song</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {songs: state.songs};
};
export default connect(mapStateToProps)(SongList);
