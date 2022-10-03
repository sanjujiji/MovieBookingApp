import React, {Component} from 'react';
import './Home.css';
import { DisplayImageList } from './DisplayImageList';


export default class LeftPortion extends Component {
    constructor(props){
      super(props);
    }
    render(){
        return(
          <div className='left'>
              <DisplayImageList moviesData = {this.props.moviesData} />
          </div>
      )  
  }
}    