import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    { title: "I want to fly", duration: "3:15" },
    { title: "Barbie Girl", duration: "4:15" },
    { title: "Brazil Brazil", duration: "3:45" },
    { title: "Vande Mataram", duration: "4:50" }
  ];
};

const selectedSong = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSong
});
