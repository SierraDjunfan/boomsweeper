import React from 'react'
import { ResetButtonProps } from './Interfaces';
import './ResetButton.scss'

export const ResetButton = (props: ResetButtonProps) =>
    <button title="Restart Game" id="reset-button" className={props.style} onClick={props.manageClick}></button>
