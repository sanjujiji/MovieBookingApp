import React, {Component} from 'react';
import Header from '../../../src/common/header/Header';
import './Home.css';
import TopPortion from '../../screens/home/TopPortion';
import LeftPortion from '../../screens/home/LeftPortion';
import RightPortion from '../../screens/home/RightPortion';
import moviesData from '../../common/moviesData';
import {BottomPortion} from '../home/MovieFilter';
// import {movieScreened} from '../home/MovieFilter';


class Home extends Component{
    constructor(){
        super();
    }
    render(){
        
        return (
            <div>
                <Header/>
                <div id="header2">
                    <span >Upcoming Movies</span>
                </div>
                <div>
                    <TopPortion moviesData={moviesData}></TopPortion>
                </div>
                <div className='flex-containter'>
              
                {/* {movieScreened ? <LeftPortion moviesData={movieScreened} /> :  <LeftPortion  moviesData={moviesData}></LeftPortion>} */}
                   
                    {/* <h1>Movies data :{movieScreened}</h1> */}
                    <BottomPortion ></BottomPortion>
                    {/* <RightPortion moviesData={moviesData}></RightPortion> */}
                </div>
            </div>
        )
    }
}   

export default Home;