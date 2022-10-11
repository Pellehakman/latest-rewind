import { useEffect, useState } from 'react';
import Matchlist from '../components/Matchlist'
import { AllTimeData, Match } from '../models/data';
import '../styles/Home.scss'
import useLocalStorage from '../components/hooks/use-local-storage';

interface Props {
    match: Match;

    sendData: AllTimeData

    
    
  
};

const Home: React.FC<Props> = () => {

   
    const [matches, setMatches] = useLocalStorage<Match[]>('matches', [])
    const [playerMatches, setPlayerMatches] = useState<Match[]>([])
    
    const [date, setDate] = useState<string>("")
    const [matchName, setMatchName] = useState<string>("ERANGEL")
    const [sendData, setSendData] = useState<AllTimeData[]>([])
    const [playerOne, setPlayerOne] = useLocalStorage('player', [])
    const [playerOneK, setPlayerOneK] = useState<number>(0);
    const [playerOneD, setPlayerOneD] = useState<number>(0);
    const [playerTwo, setPlayerTwo] = useState<string>("")
    const [playerTwoK, setPlayerTwoK] = useState<number>(0);
    const [playerTwoD, setPlayerTwoD] = useState<number>(0);

    const [hide, setHide] = useState<boolean>(false);
    const [filterOverlay, setFilterOverlay] = useState<boolean>(true);
    const [overlay, setOverlay] = useState<boolean>(false);
  
    const handleAddMatchOverlay: () => void = () => {setOverlay(!overlay) }

    const handleSubmit: (e: any) => void = (e: any) => {
        e.preventDefault();

    // if (playerOneD > playerTwoD){
    //     console.log('plauer one loose')
    // }
            
    



        function playerOneWin() {
            if (playerOneK > playerTwoK) {
                return "WIN"
            }
            if (playerOneK < playerTwoK) {
                return "LOOSE";
            }
            if (playerOneK === playerTwoK) {
                return "DRAW"
            }
            return ""
        }
       
        const playerOneWinner = playerOneWin()
       


        function playerTwoWin() {
            if (playerTwoK > playerOneK) {
                return "WIN"
            }
            if (playerTwoK < playerOneK) {
                return "LOOSE";
            }
            if (playerTwoK === playerOneK) {
                return "DRAW"
            }
            return ""
        }
        const playerTwoWinner = playerTwoWin()

        setMatches([...matches, {
            matchId: Date.now(), playerOneWinner, playerTwoWinner, date, matchName, players: {
                playerOne, playerTwo, playerOneK, playerOneD, playerTwoK, playerTwoD
            }
        }].sort((a, b) => { return b.matchId - a.matchId; }))
        setOverlay(!overlay)
    };

    const handlePlayerMatches: (e: any) => void = () => {

        let playerOneClick = sendData.map(f => f.allTimeName)

        let showPlayerOneMatch = matches.filter(obj => {
                    return obj.players.playerOne === `${playerOneClick}`
        })

        let showPlayerTwoMatch = matches.filter(obj => {
                    return obj.players.playerTwo === `${playerOneClick}`
        })

        let newArr = showPlayerOneMatch.concat(showPlayerTwoMatch)
        setPlayerMatches(newArr)
        setFilterOverlay(!filterOverlay)
        setHide(!hide)


    }


  
    
    return (
        <section className='home-container'>

            <div className='main-container'>
                <div className='matches-container'>
                    <div className='playerOne-container'>ENTER NAME:
                        <input className='playerOne-input' type="text" placeholder="Enter your name" onChange={(e: any) => setPlayerOne(e.target.value)} />
                    </div>

                    <section className='header-container'>

                        <span className='playerOne-display'>{playerOne} </span>
                        <button className='add-btn-container' onClick={handleAddMatchOverlay}><span className='add-btn'>ADD MATCH</span></button >
                    </section>


                    {overlay && <form className="add-match" onSubmit={handleSubmit}>
                       
                        <div className='big-match-container'>
                            <header className='team-names-container'>
                                <div className='add-teamOne-header'>{playerOne}</div>
                                <div className='vs'>VS</div>
                                <div className='add-teamTwo-header'>{playerTwo}</div>
                            </header>

                            <div className='team-big-container'>



                                <div className='big-match-team'>
                                    <div className='b-m-row'>
                                        <div className='b-m-col'>
                                            <div className="b-m-players"><span>YOU</span></div>
                                            <span className="items">{playerOne}</span>
                                        </div>
                                    </div>


                                    <div className='b-m-row'>
                                        <div className='b-m-col'>
                                            <div className="b-m-kills"><span>KILLS</span></div>
                                            <span className="item"><input className='add-number' type="number"  required placeholder='K' onChange={(e) => setPlayerOneK(Number(e.target.value))} /></span>


                                        </div>
                                    </div>
                                    <div className='b-m-row'>
                                        <div className='b-m-col'>
                                            <div className="b-m-deaths"><span>DEATHS</span></div>
                                            <span className="item"><input className='add-number' type="text" required placeholder='D' onChange={(e) => setPlayerOneD(Number(e.target.value))} /></span>
                                        </div>
                                    </div>
                                </div>

                                <div className='big-divider'></div>

                                <div className='big-match-team'>
                                    <div className='b-m-row'>
                                        <div className='b-m-col'>
                                            <div className="b-m-players"><span>ENEMY</span></div>
                                            <span className="items"><input className='add-player' type="text"  required placeholder='Enter enemy' onChange={(e) => setPlayerTwo(e.target.value)} /></span>


                                        </div>
                                    </div>

                                    <div className='b-m-row'>
                                        <div className='b-m-col'>
                                            <div className="b-m-kills"><span>KILLS</span></div>
                                            <span className="item"><input className='add-number' type="number"  required placeholder='K' onChange={(e) => setPlayerTwoK(Number(e.target.value))} /></span>


                                        </div>
                                    </div>
                                    <div className='b-m-row'>
                                        <div className='b-m-col'>
                                            <div className="b-m-deaths"><span>DEATHS</span></div>
                                            <span className="item"><input className='add-number' type="text" name='kills' required placeholder='D' onChange={(e) => setPlayerTwoD(Number(e.target.value))} /></span>
                                        </div>
                                    </div>


                                </div>




                            </div>

                            <div className='big-match-btn-container'>
                                <input className='date-btn' type="date" onChange={(e: any) => setDate(e.target.value)} />
                                <div className='big-divider'></div>
                                <select className='map-btn' onChange={(e: any) => setMatchName(e.target.value)}>

                                    <option value="ERANGEL">ERANGEL</option>
                                    <option value="MIRAMAR">MIRAMAR</option>
                                    <option value="PARAMO">PARAMO</option>
                                    <option value="VIKENDI">VIKENDI</option>
                                </select>



                            </div>

                            <div className='big-match-btn-container'>

                                <button className='close-btn' onClick={handleAddMatchOverlay}>CLOSE</button>
                                <input type="submit" className='save-btn' onClick={(e) => handleSubmit(e)} value="SAVE" />
                            </div>
                        </div>

                    </form>}

                    <Matchlist
                        matches={matches}
                        setMatches={setMatches}
                        setSendData={setSendData}
                        filterOverlay={filterOverlay}
                        hide={hide}
                        playerMatches={playerMatches} 
                                        />





                </div>
               
                <div className='all-time-container'>
                    <section className='all-time-header'>
                        <span >LAST 10 GAMES</span>

                    </section>

                    <div className='all-time-player'>
                        {/* {allTimeName} */}
                        </div>
                    <div className='view-games-btns'>
                        <button id="viewGames" className='view-games' onClick={handlePlayerMatches}>
                            VIEW {sendData.map(f => f.allTimeName)} GAMES/VIEW ALL
                            </button>
                            
                    </div>

                    <div className='all-time-list'>
                        <span>kills: 
                            {sendData.map(f => f.allTimeKills)}
                            </span>
                        <span>wins: 
                            {sendData.map(f => f.totalWin)}
                            </span>
                        
                        <span>draw: 
                            {sendData.map(f => f.totalDraw)}
                            </span>
                        <span>loose: 
                            {sendData.map(f => f.totalLoose)}
                            </span>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Home


