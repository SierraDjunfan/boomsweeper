import { AboutSectionProps } from './Interfaces';
import './AboutSection.scss'

export const AboutSection = (props: AboutSectionProps) => {

    return (
        <div id="modal" onClick={props.modalWasClicked}>
            <div className="popup">
                <h1>ABOUT THIS APP</h1>
                <p>Hi! My name is Sara Hayward and I created this app to showcase my skills with React/Typescript/Sass.</p>
            </div>
        </div>
    )
}