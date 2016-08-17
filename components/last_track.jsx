import React from 'react';

export default class LastTrack extends React.Component {
  constructor () {
    super();
    this.state = { headerClass: "header", trackName: "", trackArtist: "" };
  }

  getLastTrack () {
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=josephwilli12&api_key=739683b331d66f3219c4e0ceac5f9806&limit=1&period=7day&format=json", (data) => {
      let lastTrack = data.toptracks.track[0];
      this.setState({ trackName: lastTrack.name,
                        trackArtist: lastTrack.artist.name });
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
