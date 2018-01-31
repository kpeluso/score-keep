import { Meteor } from 'meteor/meteor';
// //import './../imports/utils';
// import {greetUser} from './../imports/utils'; // specifies which exports we want
//
// console.log('log from /server/main.js');
// console.log(greetUser());
//

import {Players} from './../imports/api/players';


Meteor.startup(() => {
  // code to run on server at startup
  // Players.insert({
  //   name: 'Kenny bot',
  //   score: 42
  // });
});

