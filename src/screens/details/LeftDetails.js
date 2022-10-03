import React, {Component} from 'react';
import DisplayImageListDetails from '../details/DisplayImageListDetails';

class LeftDetails extends Component{
    render(){
    return(
        <DisplayImageListDetails moviesData={this.props.moviesData}></DisplayImageListDetails>
    )
}
}

export default LeftDetails;