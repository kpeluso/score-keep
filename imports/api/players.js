import {Mongo} from 'meteor/mongo'; // named export
import numeral from 'numeral'; // default unnamed export

export var Players = new Mongo.Collection('players');

export const calculatePlayerPositions = (players) => {
  let rank = 1;
  return players.map((player, idx) => {
    if (idx !== 0 && players[idx-1].score > player.score) {
      rank++;
    }

    return {
      ...player,
      rank,
      position: numeral(rank).format('0o') // see documentation for numeraljs
    }
  });
};

