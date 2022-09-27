import React, { Component } from  'react';
import '../../common/header/Header.css';
import { ReactComponent as Logo} from '../../assets/svg0.svg'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../details/Details.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


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
    },
  });

class HeaderDetails extends Component{
    render(){
        return(
            <div>
                <div className='header'>
                        <Logo className='logo'/>
                        {/*Adding the Book show button*/}
                        <Stack spacing={2} direction="row">
                            <div className = "buttons">
                                <Button variant = "contained" >Book Show</Button>
                                <Button variant = "outlined" className="headerBtn">Login</Button>
                                <Button variant = "outlined" className="headerBtn">Logout</Button>
                            </div>
                        </Stack>        
                </div>
                <div>
                    <ThemeProvider theme={theme}>
                        <Stack direction="row" spacing={2}>
                         <Typography>
                                <Link to="/" target="_self"  style={{ textDecoration: 'none'}}><Button><span>&#60;&nbsp;&nbsp;</span>Back to Home</Button></Link>
                         </Typography>
                        </Stack>
                    </ThemeProvider>    
                </div>
            </div>
        )

    }
}

export default HeaderDetails;