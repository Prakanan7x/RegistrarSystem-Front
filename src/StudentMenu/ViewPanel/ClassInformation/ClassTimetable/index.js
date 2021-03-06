import React, { Component } from 'react';

export default class ClassTimetable extends Component {
   
    render() {
        
        if (this.props.data === null){
            return null;
        }else{
            let myData = this.props.data.data;
          
            return (
                <div>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            {
                                myData.map(row => (
                                    <tr>
                                        <div>Course ID : {row.CourseID}</div>
                                        <div>Section : {row.SecNo}</div>
                                        <div>Day : {row.day}</div>
                                        <div>Time : {row.startTime} - {row.endTime}</div>
                                        <div>Building : {row.Bcode} </div>
                                        <div>Floor : {row.Floor} </div>
                                        <div>Room : {row.RoomNo} </div>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}