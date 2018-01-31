import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value; // target is the form, then reference element by name attribute
    e.preventDefault(); // will prevent full-page refresh upon form submission
    if (playerName) {
      e.target.playerName.value = '';
      Players.insert({name:playerName, score:0});
    }
  }

  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' className="form__input" name='playerName' placeholder='Player name'/>
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}

