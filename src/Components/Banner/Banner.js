import React, { useState } from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import DatePicker from '../DatePicker/DatePicker';
import { useNavigate } from 'react-router-dom';

function Banner() {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className="banner__search">
                {showSearch && <DatePicker />}
                <Button className='banner__searchButton' variant='outlined' onClick={() => setShowSearch(!showSearch)} >
                   {showSearch ? "Hide" : "Search Dates"} 
                </Button>
            </div>
            <div className="banner__info">
                <h1>Get Out and Stretch Your Imagination</h1>
                <h5>Plan A Difference Kind of Gateway to Uncover the Hiddne Gems Near You!</h5>
                <Button onClick={() => navigate('/search')} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
