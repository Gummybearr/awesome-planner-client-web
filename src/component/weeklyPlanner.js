import React from 'react';
import './weeklyPlanner.css';

import DailyPlanner from './dailyPlanner';

const WeeklyPlanner = (props) => {

    let addflag = 0;

    const test = () => {
        alert('testing');
    }

    return (
    <div className='week-outline'>
        <div className='day-container'>
            <div className='day-outline'><div className='day-text'>Sun</div><div onClick={test}><DailyPlanner></DailyPlanner></div></div>
            <div className='day-outline'><div className='day-text'>Mon</div><DailyPlanner></DailyPlanner></div>
            <div className='day-outline'><div className='day-text'>Tues</div><DailyPlanner></DailyPlanner></div>
            <div className='day-outline'><div className='day-text'>Wed</div><DailyPlanner></DailyPlanner></div>
            <div className='day-outline'><div className='day-text'>Thu</div><DailyPlanner></DailyPlanner></div>
            <div className='day-outline'><div className='day-text'>Fri</div><DailyPlanner></DailyPlanner></div>
            <div className='day-outline-no-border'><div className='day-text'>Sat</div><DailyPlanner></DailyPlanner></div>
        </div>
    </div>);
};

export default WeeklyPlanner;