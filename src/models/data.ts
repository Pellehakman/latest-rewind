export interface Match{
    
    matchId: number;
    matchName: string;
    date: string;
    playerOneWinner: string;
    playerTwoWinner: string
    players: {
        playerOne?: any;
        playerId?: number
        playerOneK: number;
        playerOneD: number;
        playerTwo: string
        playerTwoK: number
        playerTwoD: number
    }
   
}

export interface AllTimeData{
    
    allTimeName: string;
    allTimeKills: number;
    totalWin: number;
    totalDraw: number
    totalLoose: number;
    
}
