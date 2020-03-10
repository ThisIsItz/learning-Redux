import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Psychosocial', duration: '4:05' },
        { title: 'Hardwire', duration: '5:06' },
        { title: 'All Stars!', duration: '3:15'},
        { title: 'I want it That Way', duration: '1:45'}
    ]
}

const selectedSongReducer = ( selectedSong = null, action ) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});