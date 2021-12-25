import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from '../SearchResult/SearchResult';

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className="searchPage__info">
                <p>62 Stays - 26 August to 30 August - 2 Guests</p>
                <h1>Stays Nearby</h1>
                <Button variant='outlined'>Cancellation Flexibility</Button>
                <Button variant='outlined'>Type of Place</Button>
                <Button variant='outlined'>Price</Button>
                <Button variant='outlined'>Rooms and Beds</Button>
                <Button variant='outlined'>More Filters...</Button>
            </div>

            <SearchResult
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="£30 / night"
                total="£117 total"
            />

            <SearchResult
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                price="£40 / night"
                total="£157 total"
            />
        </div>
    )
}

export default SearchPage
