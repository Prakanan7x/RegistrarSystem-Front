import React, { Component } from 'react';
import axios from 'axios';

export default class DocumentRequest extends Component {

    state = {
        data : null
    }

    componentDidMount = () => {
        this.onSubmit();

    }

    onQueried = (res) => {
        this.setState({data:res});
    }

    onSubmit = () => {
       var qstring = '/certificate';
        
       axios.get(qstring).then((res) => {
            this.onQueried(res);
        })
    }

    render() {
        return (
            <div>
            <div>ขอใบรับรอง</div>
            <div> Course ID &emsp; Section </div>
            <div><input></input> </div>
            </div>




        )
    }
}