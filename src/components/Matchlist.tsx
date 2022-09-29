import AddMatch from "./AddMatch"
import SmallMatch from "./SmallMatch"
import '../styles/MatchList.scss'


const MatchList = () => {
    return(
    <div className="match-list-container">
        <header>This is Matchlist</header>

        <AddMatch />

        <SmallMatch/>




        
    </div>
    )
}
  


    export default MatchList