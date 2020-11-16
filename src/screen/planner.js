import React from 'react';
import './planner.css';

import PlannerBoard from '../component/plannerBoard';

const Planner = (props) => {
    return (<div className='palanner'>
        <div className='headerSpace'/>
        <PlannerBoard></PlannerBoard>
    </div>);
};

export default Planner;