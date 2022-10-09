import { useEffect, useState } from 'react'
import { AllTimeData, Match } from '../models/data';
import '../styles/SmallMatch.scss'
import { GiExpand } from "react-icons/gi";

type Props = {
    match: Match
}

const NewSmallMatch = ({ match }: Props) => {
    const [overlay, setOverlay] = useState<boolean>(false);
    const [hide, setHide] = useState<boolean>(true); 
    
    const handleBigMatchOverlay: () => void = () => {
    setHide(!hide); setOverlay(!overlay);
}

    return (
        <section className='small-match-conainer' >
            {hide &&
                //---------------//SMALL CARD---------------//
                <div className='small-match'>
                    <div className='small-match-display'>
                        <div className='small-match-time-container'>
                            <span className='small-match-date'>{match.date}</span>

                        </div>
                        <div className='white-divider'></div>

                        <span className='small-match-headerName'>{match.matchName}</span>
                        <div className='white-divider'></div>
                        <span className='small-match-headerWin'>
                            {match.playerOneWinner}
                            
                            </span>
                        <div className='white-divider'></div>
                        <div className='drowdown-container'>

                            <GiExpand className='dropdown' onClick={handleBigMatchOverlay} />
                        </div>

                    </div>

                </div>}

            {overlay &&
                //---------------//BIG CARD---------------//
                <div className='big-match-container'>

                    <header className='team-names-container'>
                        <div className='teamOne-header'>{match.players.playerOne}</div>
                        <div className='vs'>VS</div>
                        <div className='teamTwo-header'>{match.players.playerTwo}</div>
                    </header>
                    <span className='info-box'>To see last 10 games data, click on any player name</span>
                    <div className='team-big-container'>

                        <div className='big-match-team'>
                            <div className='b-m-row'>
                                <div className='b-m-col'>
                                    <div className="b-m-players"><span>PLAYERS</span></div>
                                    <span className="items" >{match.players.playerOne}</span>
                                </div>
                            </div>

                            <div className='b-m-row'>
                                <div className='b-m-col'>
                                    <div className="b-m-kills"><span>KILLS</span></div>
                                    <div className="item">{match.players.playerOneK}</div>
                                </div>
                            </div>
                            <div className='b-m-row'>
                                <div className='b-m-col'>
                                    <div className="b-m-deaths"><span>DEATHS</span></div>
                                    <div className="item">{match.players.playerOneD}</div>
                                </div>
                            </div>
                        </div>

                        <div className='big-divider'></div>

                        <div className='big-match-team'>
                            <div className='b-m-row'>
                                <div className='b-m-col'>
                                    <div className="b-m-players"><span>PLAYERS</span></div>
                                    <span className="items" >{match.players.playerTwo}</span>
                                </div>
                            </div>

                            <div className='b-m-row'>
                                <div className='b-m-col'>
                                    <div className="b-m-kills"><span>KILLS</span></div>
                                    <div className="item">{match.players.playerTwoK}</div>
                                </div>
                            </div>
                            <div className='b-m-row'>
                                <div className='b-m-col'>
                                    <div className="b-m-deaths"><span>DEATHS</span></div>
                                    <div className="item">{match.players.playerTwoD}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='big-match-btn-container'>  
                        <button className='delete-btn'>DELETE</button>
                        <button className='close-btn' onClick={handleBigMatchOverlay}>CLOSE</button>
                    </div>
                </div>}
        </section>
    )
}

export default NewSmallMatch
