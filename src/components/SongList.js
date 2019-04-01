import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends React.Component {
  renderList = () => {
    return this.props.songs.map(eachSong => {
      return (
        <div className="item" key={eachSong.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(eachSong)}
            >
              Select
            </button>
          </div>
          <div className="content">{eachSong.title}</div>
        </div>
      );
    });
  };
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
