// ## Basketball Players

// Given an array of basketball players stored as JavaScript objects:

// ```
var players = [
  {
    name: 'Paul Millsap',
    position: 'PF',
    avgMinutesPlayed: 36,
    avgPoints: 16.4,
    avgRebounds: 9.4,
    starter: true
  },
  {
    name: 'Jeff Teague',
    position: 'PG',
    avgMinutesPlayed: 28.6,
    avgPoints: 15.6,
    avgRebounds: 1.9,
    starter: true
  },
  {
    name: 'Al Horford',
    position: 'C',
    avgMinutesPlayed: 32,
    avgPoints: 13.2,
    avgRebounds: 6.8,
    starter: true
  },
  {
    name: 'Kent Bazemore',
    position: 'SF',
    avgMinutesPlayed: 31.8,
    avgPoints: 12,
    avgRebounds: 6.6,
    starter: true
  },
  {
    name: 'Kyle Korver',
    position: 'SG',
    avgMinutesPlayed: 32.4,
    avgPoints: 11.2,
    avgRebounds: 4.9,
    starter: true
  },
  {
    name: 'Dennis Schroder',
    position: 'PG',
    avgMinutesPlayed: 18.3,
    avgPoints: 10.7,
    avgRebounds: 1.8,
    starter: false
  },
  {
    name: 'Kris Humphries',
    position: 'PF',
    avgMinutesPlayed: 14.7,
    avgPoints: 9.7,
    avgRebounds: 5.7,
    starter: false
  },
  {
    name: 'Mike Scott',
    position: 'PF',
    avgMinutesPlayed: 17.6,
    avgPoints: 7.0,
    avgRebounds: 3.6,
    starter: false
  },
  {
    name: 'Thabo Sefolosha',
    position: 'SF',
    avgMinutesPlayed: 18.9,
    avgPoints: 4.8,
    avgRebounds: 3.9,
    starter: false
  },
  {
    name: 'Mike Muscala',
    position: 'PF',
    avgMinutesPlayed: 7.4,
    avgPoints: 2.7,
    avgRebounds: 1.9,
    starter: false
  },
  {
    name: 'Tim Hardaway Jr.',
    position: 'SG',
    avgMinutesPlayed: 9.7,
    avgPoints: 2.2,
    avgRebounds: 1.0,
    starter: false
  },
  {
    name: 'Lamar Patterson',
    position: 'SG',
    avgMinutesPlayed: 5.0,
    avgPoints: 1.5,
    avgRebounds: 1.3,
    starter: false
  },
  {
    name: 'Kirk Hinrich',
    position: 'SG',
    avgMinutesPlayed: 4.5,
    avgPoints: 0.8,
    avgRebounds: 0.7,
    starter: false
  }
];
var avgOfAvgMinutes = 0;
for(i=0; i<players.length; i++){
  avgOfAvgMinutes += players[i].avgMinutesPlayed;
  //console.log(players[i].avgMinutesPlayed);
}
avgOfAvgMinutes/players.length;


// * Print the average playing time of the players.
console.log(`Avg playing time of players: \n\t${avgOfAvgMinutes/players.length}\n` );

// * Print the average playing time of the starters.
let avgOfStarterAvgMinutes = 0;
const starters = players.filter(function (player) {
    if(player.starter){
        avgOfStarterAvgMinutes += player.avgMinutesPlayed;
        return player;
    }
});
console.log(`Starter Avg Minutes: \n\t${avgOfStarterAvgMinutes/starters.length}\n`);
    
    
// * Print the average playing time of the bench players.
let benchMinAvg = 0;
const bench = players.filter(function(player){
     return benchMinAvg += player.avgMinutesPlayed;
});
console.log(`Bench Avg Minutes: \n\t${benchMinAvg/(players.length-5)}\n`);


// * Create an array of the names of each player.
names = players.map(function(player){return player.name});
console.log(`Players: \n${names}\n`);

// * Create an array of the names of the players who average more than 10 points per game.
doubleDigitScorers = players.filter(player => (player.avgPoints >= 10));
console.log(`Double Digit Scoers:\n\t${doubleDigitScorers.map(player => player.name)} \n`);

// * Create an array of the names of the players who average more than 5 rebounds per game.
fiveRebounders = players.filter(player => (player.avgRebounds > 5));
console.log(`Players with more than 5 rebounds:\n\t${fiveRebounders.map(player => player.name)} \n`);


// * Who is the player with the most points per minute played? Write a program to find that out.
let highestSPM = players.pop();
players.forEach(function(player){
  if((player.avgPoints/player.avgMinutesPlayed) > (highestSPM.avgPoints/highestSPM.avgMinutesPlayed)) highestSPM = player;
});
console.log(`Player with most points per minute: \n\t${highestSPM.name}\n `);


// * Based on this data, what is the average points score for the team as a whole?
let teamPointsAvg = players.reduce((points, player) => points + player.avgPoints, 0);
console.log(`Team avg points: \n\t${teamPointsAvg}\n`);
