import { combineReducers } from "react-redux";
const songsReducer = () => {
  return [
    { title: "I want to fly", duratiom: "3:15" },
    { title: "Barbie Girl", duratiom: "4:15" },
    { title: "Brazil Brazil", duratiom: "3:45" },
    { title: "Vande Mataram", duratiom: "4:50" }
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
