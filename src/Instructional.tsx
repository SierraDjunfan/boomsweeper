import { InstructionalProps } from './Interfaces';
import './Instructional.scss'

export const Instructional = (props: InstructionalProps) => {

    return (
        <div id="modal" onClick={props.modalWasClicked}>
            <div className="popup">
                <h1>HOW TO PLAY</h1>
                <p>Left click any square to reveal either a mine, a safe zone or a numbered square.</p>
                <p>Numbered squares show the count of mines in the eight adjacent squares. Use this information to avoid mines.</p>
                <p>If you suspect a square contains a mine, right-click to place a flag on it for future reference.</p>
                <p>Be careful! Clicking on a square with a mine will end the game.</p>
                <p>You win by revealing all squares without mines.</p>
                <p>At any point, you can click the smiley face button to start a new game.</p>
                <p>Try to get a high score by finishing the minefield in the least amount of time.</p>
            </div>
        </div>
    )
}