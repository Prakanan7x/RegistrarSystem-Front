import React, { Component } from 'react';

import LogoutButton from './LogoutButton';

export default class StudentPanel extends Component {
    
    //<div><button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'TranscriptRequest'})}}>ขอ Transcript</button></div>
    render(){
        return (
            <div>
            <div> Menu Page (Student) </div>
            <div className="btn-group-vertical btn-group-sm">
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'StudentInformation'})}}>ข้อมูลนักศึกษา</button>
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'RegisterCourse'})}}>ลงทะเบียนรายวิชา</button>
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'ManageCourse'})}}>ลด ถอน รายวิชา</button>
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'ClassInformation'})}}>ดูตารางเรียน</button>
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'ExamInformation'})}}>ดูตารางสอบ</button>
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'GradeInformation'})}}>ดูเกรดรายวิชา</button>
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'DocumentRequest'})}}>ขอใบรับรอง</button>
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'RegistrationInformation'})}}>ตรวจสอบผลการลงทะเบียน</button>
                <button className="btn btn-default" onClick={ () =>{ this.props.changeState({page:'CourseComment'})}}>ประเมินรายวิชา</button>
                <button className="btn btn-default" onClick={ () => this.props.changeState({page:'SearchCourse'})}>ค้นหารายวิชา</button>
                <LogoutButton changePage={this.props.changePage} />
            </div>
            </div>
        );
    }



}