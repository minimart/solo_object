var timberwolves = {
  teamName: 'Timberwolves',
  sport: 'basketball',
  headCoach: 'Tom Thibodeau',
  homeCity: 'Minneapolis',
  homeArena: 'Target Center',
  teamColors: 'blue, black, silver, green, and white',
  generalManager: 'Scott Layden',
  owner: 'Glen Taylor',
  draftPickNum: 5,
  newestPlayer: 'Kris Dunn',
  // get newestPlayer() {
  //   return this.corePlayers[this.length-1];
  // }
  // set newestPlayer() {
  //   var names = name[(this.length-1)].split(' ');
  //   this.firstName = names[0] || '';
  //   this.lastName = names[1] || '';
  // }
  // corePlayers: function() {
  //   for(var i = 0; i < corePlayersRoster.length-2; i++){
  //     console.log(corePlayersRoster[i] + ', ');
  //     }
  //     console.log('and ' + corePlayersRoster.length-1);
  // },
  //  corePlayersRoster: ['Karl-Anthony Towns', 'Andrew Wiggins', 'Zach LaVine'],
  // This was me trying to get 'getters and setters' to work, it didn't, I will wait until the
  // lecture and ask more questions then!
  corePlayer1: 'Karl-Anthony Towns',
  corePlayer2: 'Andrew Wiggins',
  corePlayer3: 'Zach LaVine',
  mascot: 'Crunch the Wolf',
}
// This function will display information from the above object in a more reader-friendly method.
function timberwolvesInfo(teamObject) {
  console.log("The " + teamObject.teamName + " is a " + teamObject.sport +
   " team. Their head coach is " + teamObject.headCoach + ". They are located in "
   + teamObject.homeCity +  " and play in the " + teamObject.homeArena + ". Their team colors are "
   + teamObject.teamColors + ", and their mascot is " + teamObject.mascot + ". They are owned by "
   + teamObject.owner + ", and are managed by General Manager " + teamObject.generalManager +
   ". They had draft pick number " + teamObject.draftPickNum +
   " in the 2016 draft. With that pick, they selected " + teamObject.newestPlayer +
   " who will be a great addition to the team's vibrant young core players: " +
   teamObject.corePlayer1 + ", " + teamObject.corePlayer2 + ", and " + teamObject.corePlayer3 + "."
  );

}
//Here I am calling the function to actually display the above information, passing in my object of Timberwolves.
timberwolvesInfo(timberwolves)
