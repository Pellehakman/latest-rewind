import AddMatch from "./AddMatch"
import SmallMatch from "./SmallMatch"
import '../styles/MatchList.scss'


const MatchList = () => {

    const [ overlay, setOverlay] = (false)



const handleAddMatchOverlay: () => void = () => {
    console.log('bög')


}



    return(
    <div className="match-list-container">
        <header>This is Matchlist</header>
        <button onClick={handleAddMatchOverlay}>ADD MATCH</button >

        <AddMatch />

        <SmallMatch/>




        
    </div>
    )
}
  


    export default MatchList