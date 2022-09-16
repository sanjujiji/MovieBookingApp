import React, {Component} from 'react';
import Header from '../../../src/common/header/Header';
import './Home.css';
import ImageListComp from '../../screens/home/ImageListComponent';
import moviesData from '../../common/moviesData';
class Home extends Component{
    render(){
        return (
            <div>
                <Header/>
                <div id="header2">
                <span >Upcoming Movies</span>
                
                </div>
                <ImageListComp moviesData={moviesData}></ImageListComp>
            </div>
        )
    }
}   

export default Home;