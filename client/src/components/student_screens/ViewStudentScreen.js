import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import MaterialTable from "material-table";

import AuthService from "../../services/auth.service";
import MSStudentService from "../../services/msStudent.service";



class ViewStudentScreen extends Component {
    constructor(props){
        super(props);
        this.state = {    
            currentUser: AuthService.getCurrentUser(),
            showModalDialogPopup: false,
            modalType: "none",
            student: [],
            firstName: "",
            lastName: "",
            email: "",
            sid: "",
            password: "password",
            gpa: "",
            entrySemester: "",
            entryYear: "",
            gradSemester: "",
            expectedGraduation: "",
            hasGraduated: "",
            department: "",
            track : "",
            nSemestersInProgram: "", 
            advisor: "",
            totalCredits: "",
            projectOption: "",
            requirementsVersion: "",
            requirementVersionSemester: "",
            coursePlans: [{courseOfferingID: "CSE 503", grade: "A"}, {courseOfferingID: "CSE 504", grade: "B"}],
            coursePlanColumns: [
                {
                    title: "Semester",
                    field: "courseOfferingID"
                }, 
                {
                    title: "",
                    field: "grade"
                }
            ],
            comments: [{date: "4/13/21", comment: "Great job!"}],
            commentColumns: [
                {
                    title: "Date",
                    field: "date"
                }, 
                {
                    title: "Comment",
                    field: "comment"
                }
            ]
        }    
    }

  
    
    async componentDidMount(){
        await console.log("componentDidMount at Student_screens/ViewStudentScreen.js");
        if(localStorage.getItem('info')){
            await MSStudentService.getinfo( MSStudentService.getStudentInfo().email);
        }else{
            await MSStudentService.getinfo(this.props.location.state.email);
        }
        await MSStudentService.getStudentInfo();
        await MSStudentService.getStudentInfo();
        var stuInfo= await MSStudentService.getStudentInfo();
        console.log(stuInfo);
            
        this.setState({
            firstName: stuInfo.firstName,
            lastName: stuInfo.lastName,
            sid: stuInfo.studentID,
            hasGraduated: stuInfo.hasGraduated,
            email: stuInfo.email,
            gpa: stuInfo.gpa,
            entrySemester: stuInfo.entrySemester,
            entryYear: stuInfo.entryYear,
            gradSemester: stuInfo.gradSemester,
            expectedGraduation: stuInfo.gradYear,
            nSemestersInProgram: stuInfo.nSemestersInProgram,
            projectOption: stuInfo.projectOption,
            advisor: stuInfo.advisor,
            department: stuInfo.departmentID,
            track: stuInfo.track,
            requirementsVersion: stuInfo.requirementVersionYear,
            requirementVersionSemester: stuInfo.requirementVersionSemester,
            totalCredits: stuInfo.totalCredits

        });    
    }
     



    render() {
        // const { firstName, lastName, email,sid,password,gpa,entrySemester,expectedGraduation,
        //     hasGraduated,department,track,nSemestersInProgram,advisor,projectOption,requirementsVersion,
        // coursePlans ,coursePlanColumns, comments,commentColumns} = this.state;


        return (
            <div id="viewStudentFormBackground">
                <div id="viewStudentForm">
                    <br></br><br></br><br></br>
                    <h2 id="viewStudentFormHeader">Student Information</h2>
                    <div>
                        <br></br><br></br>
                        <p className="viewStudent_prompt"> First Name: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp; Last Name: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;&ensp;&nbsp;  SBU ID: 
                        <br></br><input className="viewStudent_input" type="input" defaultValue={this.state.firstName} disabled/>
                        <input className="viewStudent_input" label="First Name" type="input" defaultValue={this.state.lastName} disabled/>
                        <input  className="viewStudent_input" type="input" defaultValue={this.state.sid} disabled/>
                        </p>
                        <br></br>
                        <p className="viewStudent_prompt">Email:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;Password: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; GPA:
                        <br></br><input className="viewStudent_input" type="input" defaultValue={this.state.email} disabled/>
                        <input className="viewStudent_input" label="First Name" type="input" defaultValue={this.state.password} disabled/>
                        <input  className="viewStudent_input" type="input" defaultValue={this.state.gpa} disabled/>
                        </p>
                        <br></br>
                        <p className="viewStudent_prompt">Entry Semester:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Expected Graduation: &emsp;&emsp;&emsp;&emsp;&ensp;&nbsp; Graduated:
                        <br></br><input className="viewStudent_input" type="input" defaultValue={this.state.entrySemester} disabled/>
                        <input className="viewStudent_input" label="First Name" type="input" defaultValue={this.state.expectedGraduation} disabled/>
                        <input  className="viewStudent_input" type="input" defaultValue={this.state.hasGraduated} disabled/>
                        </p>                        
                        <br></br>                        
                        <p className="viewStudent_prompt">Department:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Track: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp; # Semesters In Program:
                        <br></br><input className="viewStudent_input" type="input" defaultValue={this.state.department} disabled/>
                        <input className="viewStudent_input" label="First Name" type="input" defaultValue={this.state.track} disabled/>
                        <input  className="viewStudent_input" type="input" defaultValue={this.state.nSemestersInProgram} disabled/>
                        </p>
                        <br></br>
                        <p className="viewStudent_prompt">Advisor:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Project: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; Requirements Version:
                        <br></br><input className="viewStudent_input" type="input" defaultValue={this.state.advisor} disabled/>
                        <input className="viewStudent_input" label="First Name" type="input" defaultValue={this.state.projectOption} disabled/>
                        <input  className="viewStudent_input" type="input" defaultValue={this.state.requirementsVersion} disabled/>
                        </p>
                        <br></br><br></br>
                        <h2 id="viewStudentFormHeader">Degree Progress</h2>
                        <br></br>
                        <p>&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Degree Requirements not available</p>
                        
                        <br></br>
                        
                        <h2 id="viewStudentFormHeader">Course Plan
                        <button id="viewStudent_suggestcourseplanbutton" className="viewStudent_button">Suggest Course Plan</button>
                        </h2>  
                        <br></br>                      
                        <div style={{position: "relative", width: "50%", left: "8%"}}>
                            <MaterialTable title="Semester"  
                                options={{toolbar: false, paging: false, sorting:false, headerStyle: {backgroundColor: '#000000',color: '#FFF'}, cellStyle: {width: 20, maxWidth: 20},
                                zIndex:0, maxBodyHeight: '500px', search:true, headerSelectionProps: {color: "primary"}}}
                                columns={this.state.coursePlanColumns} data={this.state.coursePlans}
                            />
                        </div>
                        <br></br>
                        <br></br>

                        <h2 id="viewStudentFormHeader">Comments</h2>     
                        <br></br>
                        <div style={{position: "relative", width: "50%", left: "8%"}}>
                            <MaterialTable title="Comments"  
                                options={{toolbar: false, paging: false, sorting:false, headerStyle: {backgroundColor: '#000000',color: '#FFF'}, cellStyle: {width: 20, maxWidth: 20},
                                zIndex:0, maxBodyHeight: '500px', search:true, headerSelectionProps: {color: "primary"}}}
                                columns={this.state.commentColumns} data={this.state.comments}
                            />
                        </div>                   
                        <br></br>
                        <Link to={{pathname: '/editStudent', state: {studentID: this.props.studentID}}}><button id="viewStudentForm_edit_button" className="viewStudent_button">Edit</button></Link>
                        <Link to="/"><button id="viewStudentForm_return_button" className="viewStudent_button">Return</button></Link>
                        </div>
                </div>
            </div>
        )
    }
}

export default ViewStudentScreen;
