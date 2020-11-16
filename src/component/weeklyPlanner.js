import React from 'react';
import './weeklyPlanner.css';

const WeeklyPlanner = (props) => {
    return (
    <div className='week-outline'>
        <div className='day-container'>
            <div className='day-outline'><div className='day-text'>Sun</div></div>
            <div className='day-outline'><div className='day-text'>Mon</div></div>
            <div className='day-outline'><div className='day-text'>Tues</div></div>
            <div className='day-outline'><div className='day-text'>Wed</div></div>
            <div className='day-outline'><div className='day-text'>Thu</div></div>
            <div className='day-outline'><div className='day-text'>Fri</div></div>
            <div className='day-outline-no-border'><div className='day-text'>Sat</div></div>
        </div>
    </div>);
};

export default WeeklyPlanner;