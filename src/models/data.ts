export interface Match{
    
    matchId: number;
    matchName: string;
    date: string;
    playerOneWinner: string;
    playerTwoWinner: string
    players: {
        playerOne: string;
        playerId?: number
        playerOneK: any;
        playerOneD: any;
        playerTwo: string
        playerTwoK: any
        playerTwoD: any
    }
   
}

export interface AllTimeData{
    
    allTimeName: string;
    allTimeKills: number;
    totalWin: number;
    totalDraw: number
    totalLoose: number;
    
}

// export interface Match {
//     game: string;
//     datePlayed: string;
//     matchLength: string;
//     teamSize: number;
//     teamAmount: number;
//     teamOneWin: boolean;
//     teamTwoWin: boolean;
//     teamOne: {
//       players: Array<string>;
//       teamName?: string;
//       characterName?: string;
//     };
//     teamTwo: {
//       enemyPlayers: Array<string>;
//       teamName?: string;
//       characterName?: string;
//     };
//     matchKey: number;
//     finalResult?: string;
//   }
//   [];
  
//   export default Match;