import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayersList extends React.Component {
  renderPlayers() {
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">
            Hi! Add your first player to get started.
          </p>
        </div>
      );
    } else {
      return this.props.players.map((el) => { // each el is a player
        return (
          <Player key={el._id} player={el}/>
        );
      });
    }
  };
  render(){
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}

PlayersList.propTypes = {
  players: PropTypes.array.isRequired
};

