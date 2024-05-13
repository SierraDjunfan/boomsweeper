import React from 'react'
import { MineCountProps } from "./Interfaces";
import './MineCount.scss'

export const MineCount = (props: MineCountProps) =>
    <div title="Remaining Mines" id="mine-count">{props.mineCount}</div>