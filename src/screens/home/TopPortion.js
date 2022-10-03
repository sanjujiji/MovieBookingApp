import React , {Component} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageListItem from '@mui/material/ImageListItem';
import './Home.css';


export default class TopPortion extends Component {
    render(){
    return(
        <div className = "imageList">
        <ImageList sx={{mt:0 , height:250 , width : "3000px"}} variant="quilted" cols = {6} rows = {1} rowHeight={250} className="imageList" >
            {
                this.props.moviesData.map((item,index) => {
                    if (index < 6 ) {
                        return (
                            <ImageListItem key={item.id} sx={{display: 'flex', flexDirection: 'row'}} cols={item.cols || 1} rows={item.rows || 1} >
                                <img 
                                    src={`${item.poster_url}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.poster_url}?w=164&h=164&fit=crop&auto=format`}
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
    )
        }
        
        }
