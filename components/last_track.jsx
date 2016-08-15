import React from 'react';

export default class LastTrack extends React.Component {
  constructor () {
    super();
    this.state = { headerClass: "header", trackName: "", trackArtist: "" };
  }

  getLastTrack () {
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=josephwilli12&api_key=739683b331d66f3219c4e0ceac5f9806&format=json&limit=5&callback=?", (data) => {
      $.each(data.recenttracks.track, (callback, track) => {
        this.setState({ trackName: track.name,
                        trackArtist: track.artist["#text"] });
      });
    });
  }

  componentDidMount () {
    this.getLastTrack();
  }

  render () {
    return (
      <div className="last-track">
        last song listened to: &nbsp;
        <div className="track">
          {this.state.trackName} - {this.state.trackArtist}
        </div>
      </div>
    )
  }
}
