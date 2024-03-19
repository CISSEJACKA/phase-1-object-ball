// The code below ensures that students who are using CodeGrade will get credit
// for the code-along in Canvas; you can disregard it.

require("./helpers.js");

describe("", () => {
  describe("", () => {
    it("Test passing", () => {
      return true;
    });
  });
});
const game = {
  home: {
    teamName: "Brooklyn Nets",
    colors: ["Blue", "Yellow"],
    players: {
      "Cisse": {
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1
      },
      "Mercy": {
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7
      },
      "Kevin": {
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks: 15
      },
      "Clarence": {
        number: 1,
        shoe: 19,
        points: 26,
        rebounds: 12,
        assists: 6,
        steals: 3,
        blocks: 8,
        slamDunks: 5
      },
      "Kimani": {
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assists: 2,
        steals: 4,
        blocks: 11,
        slamDunks: 1
      }
    }
  },
  away: {
    teamName: "Champions",
    colors: ["Green", "Purple"],
    players: {
      "Jesse": {
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2
      },
      "Beryl": {
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 22,
        blocks: 15,
        slamDunks: 10
      },
      "Dasago": {
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slamDunks: 5
      },
      "Benjamin": {
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0
      },
      "Brayon": {
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assists: 12,
        steals: 22,
        blocks: 5,
        slamDunks: 12
      }
    }
  }
};

// Function to get the number of points scored by a player
function numPointsScored(playerName) {
  for (let team in game) {
    const players = game[team].players;
    if (players.hasOwnProperty(playerName)) {
      return players[playerName].points;
    }
  }
  return null; // Player not found
}

// Function to get the shoe size of a player
function shoeSize(playerName) {
  for (let team in game) {
    const players = game[team].players;
    if (players.hasOwnProperty(playerName)) {
      return players[playerName].shoe;
    }
  }
  return null; // Player not found
}

// Function to get the team colors based on the team name
function teamColors(teamName) {
  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
  return null; // Team not found
}

// Function to get an array of team names
function teamNames() {
  return [game.home.teamName, game.away.teamName];
}

// Function to get an array of jersey numbers for a team
function playerNumbers(teamName) {
  for (let team in game) {
    if (game[team].teamName === teamName) {
      const players = game[team].players;
      return Object.values(players).map(player => player.number);
    }
  }
  return null; // Team not found
}

// Function to get the stats of a player
function playerStats(playerName) {
  for (let team in game) {
    const players = game[team].players;
    if (players.hasOwnProperty(playerName)) {
      return players[playerName];
    }
  }
  return null; // Player not found
}

// Function to get the number of rebounds associated with the player with the largest shoe size
function bigShoeRebounds() {
  let largestShoeSize = -Infinity;
  let playerWithLargestShoe = null;
  for (let team in game) {
    const players = game[team].players;
    for (let player in players) {
      if (players[player].shoe > largestShoeSize) {
        largestShoeSize = players[player].shoe;
        playerWithLargestShoe = player;
      }
    }
  }
  return game[playerWithLargestShoe].rebounds;
}


