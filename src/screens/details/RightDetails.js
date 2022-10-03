import React,{Component} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import '../details/Details.css';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const theme = createTheme({
    typography: {
      button: {
        marginLeft : '24px',
        marginTop : '8px',
        marginBottom : '0px',
        height : '24px',
        textTransform : 'capitalize',
        color : 'black',
      },
      h5 :{
        fontWeight : 'bolder',
      }
      
    },
  });


class RightDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : 0
        }
    }
    render(){
   
    return(
        <div>
        <br></br>
        <br></br>
        <ThemeProvider theme={theme}>
            <div className="labelAlign">
                <Typography variant = "h5" gutterBottom>
                    <label htmlFor='rate'>Rate this movie: &nbsp;</label>
                </Typography>
            </div>  
            <div>
            <Typography component="legend"></Typography>
                <Rating
                    name="simple-controlled"
                    value={this.state.value}
                    onChange={(event, newValue) => {
                    this.setState(newValue);
                }}
                />
            </div>
            <div className="labelArtist">
                <Typography variant = "h5" gutterBottom>
                    <label htmlFor='artist'>Artists: &nbsp;</label>
                </Typography>
            </div>  
            <div>
                <Grid container spacing={2} direction="row">
                {
                    this.props.moviesData.map((item) => {
                        return(
                            
                            item.artists.map((artist) =>{
                                return(
                                    <Grid item>
                                        <ImageListItem key = {artist.id} sx={{height: 350 , width : 150, margin : 1}}  >
                                        <img
                                            src={`${artist.profile_url}`}
                                            srcSet={`${artist.profile_url}`}
                                            alt={artist.first_name}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar position="bottom" title={artist.first_name+" "+artist.last_name} />
                                        </ImageListItem>
                                    </Grid>
                                )
                            })
                            
                        )
                    })
                }
                </Grid>
            </div>
        </ThemeProvider>  
        </div>
    )
            }
}

export default RightDetails;