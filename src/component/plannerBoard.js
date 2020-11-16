import React from 'react';
import './plannerBoard.css';

import MenuBar from './menuBar';
import WeeklyPlanner from './weeklyPlanner';

const PlannerBoard = (props) => {
    return (<div className='plannerBoard'>
        <MenuBar></MenuBar>
        <WeeklyPlanner></WeeklyPlanner>
    </div>);
};

export default PlannerBoard;