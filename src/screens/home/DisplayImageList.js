import React , {Component,useState, createContext, useContext , useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageListItem from '@mui/material/ImageListItem';
import format from "date-fns/format";
import { Link } from 'react-router-dom';




class DisplayImageList extends Component{
    
    render() {
    //function to handle the onClick() on the image
    return(
        <div>
        <ImageList sx={{ width: "auto", height: "auto" }} variant="quilted" cols={4} rows = {1} >
        {
            this.props.moviesData.map((item) => {
                return(
                <div key = {item.id}>
                <Link to={`/Details/${item.id}`}>    
                <ImageListItem  sx={{height: 350 , margin : 4}}  >
                    <img
                        src={`${item.poster_url}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.poster_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        className = "image"
                    />
                    <ImageListItemBar position="bottom" title={item.title} subtitle = {`Release Date : `+format(new Date(`${item.release_date}`),'EEE MMM do yyyy')} />
                </ImageListItem>
                </Link>
                </div>
                )
            })    
        }  
        </ImageList>
       </div>
   )
    }
}

export  {DisplayImageList};