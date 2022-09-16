import React, {Component} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageListItem from '@mui/material/ImageListItem';
import './Home.css';
import { format } from 'date-fns';

class ImageListComp extends Component{

    render(){
        return(
            <div>
            <div className="imageList">
                <ImageList sx={{ width: "100vw", height:250 }} variant="quilted"  cols= {6} rows = {1} rowHeight={500}>
                    {
                        this.props.moviesData.map((item,index) => {
                            if (index < 6 ) {
                                return (
                                    <ImageListItem sx={{width: 300 ,height: 250 }} key={item.id}>
                                        <img
                                            src={`${item.poster_url}`}
                                            srcSet={`${item.poster_url}`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar position="bottom" title={item.title} />
                                    </ImageListItem> )
                            }
                        }
                        )    
                    }       
                </ImageList>
            </div>
            <div className='flex-containter'>
                <div className='left'>
                    <ImageList sx={{ width: "auto", height: "auto" }} variant="quilted" cols={4} rows = {1} >
                    {
                        this.props.moviesData.map((item) => (
                            <ImageListItem sx={{height: 350 , margin : 4}} key={item.id}>
                                <img
                                    src={`${item.poster_url}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.poster_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    className = "image"
                                />
                                <ImageListItemBar position="bottom" title={item.title} subtitle = {`Release Date : `+format(new Date(`${item.release_date}`),'EEE MMM do yyyy')} />
                            </ImageListItem>
                        ))    
                    }       
                    </ImageList>
                </div>
                <div className="right">
                </div>
            </div>
            </div>
            )
            }
    }            

export default ImageListComp;