(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),s=a(32),r=a.n(s),i=a(6),c=a(2),l=a(3),d=a(8),u=a(7),j=a(4),p=a(10),h=a(20),m=a(0),b=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:""},e.handleChange=function(t){var a=t.target;e.setState((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(p.a)({},a.id,a.value))}))},e.handleSubmit=function(e){e.preventDefault()},e}return Object(l.a)(a,[{key:"render",value:function(){var e,t;return Object(m.jsxs)("div",{id:"loginScreen",children:[Object(m.jsxs)("div",{id:"loginBanner",className:"banner",children:["MAST  |  Master's Student Tracking",Object(m.jsx)("br",{})]}),Object(m.jsx)("div",{id:"loginBox",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("form",{onSubmit:this.handleSubmit,className:"col s4 white",children:[Object(m.jsx)("b",{id:"loginTextHeading",children:"MAST"}),Object(m.jsx)("h5",{className:"loginBoxText",children:"Login"}),Object(m.jsxs)("div",{className:"input-field",children:[Object(m.jsx)("label",{htmlFor:"email",className:"loginBoxText",children:"Email: "}),Object(m.jsx)("input",(e={className:"active"},Object(p.a)(e,"className","loginInput"),Object(p.a)(e,"type","email"),Object(p.a)(e,"name","email"),Object(p.a)(e,"id","email"),Object(p.a)(e,"onChange",this.handleChange),e))]}),Object(m.jsxs)("div",{className:"input-field",children:[Object(m.jsx)("label",{htmlFor:"password",className:"loginBoxText",children:"Password: "}),Object(m.jsx)("input",(t={className:"active"},Object(p.a)(t,"className","loginInput"),Object(p.a)(t,"type","password"),Object(p.a)(t,"name","password"),Object(p.a)(t,"id","password"),Object(p.a)(t,"onChange",this.handleChange),t))]}),Object(m.jsx)("div",{className:"input-field",children:Object(m.jsx)("button",{type:"submit",id:"loginButton",children:"Login"})})]})})})]})}}]),a}(n.Component),O=a(35),x=a(9),g=a(17),f=a.n(g),S=a(33),v=a.n(S).a.create({baseURL:"http://localhost:8080",headers:{"Content-Type":"application/json"}}),D=new(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"create",value:function(e){return v.post("/",e)}}]),e}()),I=new(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"create",value:function(e){return v.post("/addStudent",e)}},{key:"deleteAll",value:function(){return v.delete("/")}}]),e}()),C=new(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"create",value:function(e){return v.post("/addCoursePlan",e)}}]),e}()),N=new(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"create",value:function(e){return v.post("/addCourse",e)}}]),e}()),y=new(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"create",value:function(e){return v.post("/addPrerequisite",e)}}]),e}()),M={header:!0,dynamicTyping:!0,skipEmptyLines:!0},P=["AMS, BMI, CSE, ESE","All Departments","AAS","ACC","AFH","AFS","AMS","ANT","ARH","ARS","BCB","BDA","BEE","BGE","BIO","BME","BMI","BNB","BSB","BUS","CAR","CHE","CHI","CIV","CLT","CME","CSE","CSM","CST","CWL","DAN","DCS","DPA","ECO","EGL","EHM","EMP","ESE","ESL","ESM","ESS","EST","EUR","EXT","FIN","FLA","FLM","FRN","FSY","GEO","GER","GRD","GSS","HAX","HBA","HBH","HBM","HBP","HBY","HCB","HDO","HIS","HPD","HPH","HWC","IAP","IDC","ISE","ITL","JPN","JRN","KOR","LAT","LIN","MAE","MAR","MAR-S","MAT","MBA","MCB","MEC","MKT","MST","MUS","NET","NEU","NUR","OAE","PHI","PHY","POL","POR","PSY","RUS","SCI","SLV","SOC","SPN","SUS","TAF","THR","TMP","VIP","WNS","WRT","WST"],B=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleImportCourseOfferingsFile=function(e,t){this.setState({courseOfferings:e})},n.handleImportStudentDataFile=function(e,t){this.setState({studentData:e})},n.handleImportStudentDataCoursePlansFile=function(e,t){this.setState({studentDataCoursePlans:e})},n.handleImportGradesFile=function(e,t){this.setState({grades:e})},n.onFileChange=function(e){n.setState({courseInfoFile:e.target.files[0]})},n.state={degreeRequirements:"none",courseInformation:"none",courseOfferings:"none",studentData:"none",studentDataCoursePlans:"none",grades:"none",departmentToParse:"AMS, BMI, CSE, ESE",departmentToParseSemester:"Fall",departmentToParseYear:"2021",courseInfoFile:null},n.handleImportDegreeRequirementsFile=n.handleImportDegreeRequirementsFile.bind(Object(x.a)(n)),n.handleImportCourseInformationFile=n.handleImportCourseInformationFile.bind(Object(x.a)(n)),n.handleImportCourseOfferingsFile=n.handleImportCourseOfferingsFile.bind(Object(x.a)(n)),n.handleImportStudentDataFile=n.handleImportStudentDataFile.bind(Object(x.a)(n)),n.handleImportStudentDataCoursePlansFile=n.handleImportStudentDataCoursePlansFile.bind(Object(x.a)(n)),n.handleImportGradesFile=n.handleImportGradesFile.bind(Object(x.a)(n)),n.handleImportDegreeRequirements=n.handleImportDegreeRequirements.bind(Object(x.a)(n)),n.handleImportCourseInformation=n.handleImportCourseInformation.bind(Object(x.a)(n)),n.handleImportCourseOfferings=n.handleImportCourseOfferings.bind(Object(x.a)(n)),n.handleImportStudentData=n.handleImportStudentData.bind(Object(x.a)(n)),n.handleImportGrades=n.handleImportGrades.bind(Object(x.a)(n)),n}return Object(l.a)(a,[{key:"handleImportDegreeRequirementsFile",value:function(){}},{key:"handleImportCourseInformationFile",value:function(){}},{key:"handleImportDegreeRequirements",value:function(){}},{key:"handleImportCourseInformation",value:function(){var e=[];"AMS, BMI, CSE, ESE"===this.state.departmentToParse?e=["AMS","BMI","CSE","ESE"]:"All Departments"===this.state.departmentToParse?e=P.slice(2):e.push(this.state.departmentToParse);var t=this.state.departmentToParseSemester,a=this.state.departmentToParseYear,n=" ",o=new FileReader;o.readAsText(this.state.courseInfoFile),o.onloadend=function(s){n=o.result,e.forEach((function(e){var o=new RegExp(e+"\\s*\\d{3}:[^\\r]*\\r[^\\r]*\\r[^\\r]*\\r[^\\r]*","g");Object(O.a)(n.matchAll(o)).forEach((function(n){var o=this,s=n[0].split("\r"),r=s[0].split(":"),i=r[0].split(" "),c=i[0]+i[2],l=r[1].trim(),d=new RegExp("\\d*\\scredits|\\d*-?\u2013?\\d*\\s*credits","g"),u=new RegExp("[A-Z]{3}\\s\\d{3}|[A-Z]{3}\\d{3}","g"),j="",p=[];s[2].includes("credits")&&(j=s[2].match(d)[0].split(" ")[0]);if(s[2].includes("Prerequisites")){var h=[s[2].match(u)];null!=h&&(p=h)}var m={courseID:c,departID:e,name:l,description:s[1],credits:j,semester:t,year:a};N.create(m).then((function(e){o.setState({courseID:e.courseData.courseID,departID:e.courseData.departID,name:e.courseData.name,description:e.courseData.description,credits:e.courseData.credits,semester:e.courseData.semester,year:e.courseData.year}),console.log(e.data)})).catch((function(e){console.log(e)})),p.forEach((function(e){var t=this,a=e[0].split(" "),n=a[0]+a[1],o={courseID:m.courseID,prerequisiteID:n};console.log(o),y.create(o).then((function(e){t.setState({courseID:e.prereqData.courseID,prerequisiteID:e.prereqData.prerequisiteID}),console.log(e.data)})).catch((function(e){console.log(e)}))}))}))}))},this.props.hideModalDialogPopUp()}},{key:"handleImportCourseOfferings",value:function(){this.state.courseOfferings.forEach((function(e){var t=this,a=e.timeslot.split(" "),n=a[1].split("-"),o=a[0],s=n[0],r=n[1],i=e.department+e.course_num,c={courseOfferingID:i+e.semester+e.year+e.section,courseID:i,semester:e.semester,year:e.year,section:e.section,day:o,startTime:s,endTime:r};D.create(c).then((function(e){t.setState({courseOfferingID:e.data.courseOfferingID,courseID:e.data.courseID,semester:e.data.semester,year:e.year,section:e.section,day:e.day,startTime:e.startTime,endTime:e.endTime}),console.log(e.data)})).catch((function(e){console.log(e)}))})),this.props.hideModalDialogPopUp()}},{key:"handleImportStudentData",value:function(){var e=this,t=this.state.studentData;for(n=0;n<t.length;n++){var a={studentID:t[n].sbu_id,firstName:t[n].first_name,lastName:t[n].last_name,email:t[n].email,department:t[n].department,track:t[n].track,entrySemester:t[n].entry_semester,entryYear:t[n].entry_year,requirementVersionSemester:t[n].requirement_version_semester,requirementVersionYear:t[n].requirement_version_year,graduationSemester:t[n].graduation_semester,graduationYear:t[n].graduation_year,password:t[n].password};console.log(a),I.create(a).then((function(t){e.setState({studentID:t.data_temp.studentID,firstName:t.data_temp.firstName,lastName:t.data_temp.lastName,email:t.data_temp.email,department:t.data_temp.department,track:t.data_temp.track,entrySemester:t.data_temp.entrySemester,entryYear:t.data_temp.entryYear,requirementVersionSemester:t.data_temp.requirementVersionSemester,requirementVersionYear:t.data_temp.requirementVersionYear,graduationSemester:t.data_temp.graduationSemester,graduationYear:t.data_temp.graduationYear,password:t.data_temp.password}),console.log(t.data_temp)})).catch((function(e){console.log(e)}))}var n,o=this.state.studentDataCoursePlans;for(console.log(o),n=0;n<o.length;n++){var s=o[n].department+o[n].course_num+o[n].semester+o[n].year+o[n].section,r={studentID:o[n].sbu_id,courseOfferingID:s,grade:o[n].grade};console.log(r.studentID),console.log(r.courseOfferingID),console.log(r.grade),C.create(r).then((function(t){e.setState({studentID:t.data_plan.studentID,courseOfferingID:t.data_plan.courseOfferingID,grade:t.data_plan.grade}),console.log(t.data_plan)})).catch((function(e){console.log(e)}))}this.props.hideModalDialogPopUp()}},{key:"handleImportGrades",value:function(){this.state.grades.forEach((function(e){var t=this,a=e.department+e.course_num+e.semester+e.year+e.section;console.log("courseOfferingIDNum& studentID="),console.log(a),console.log(e.sbu_id),console.log(e.grade);var n={studentID:e.sbu_id,courseOfferingID:a,grade:e.grade};console.log("Before create service"),C.create(n).then((function(e){t.setState({studentID:e.data.studentID,courseOfferingID:e.data.courseOfferingID,grade:e.data.grade}),console.log(e.data)})).catch((function(e){console.log(e),console.log("Error create service")}))})),this.props.hideModalDialogPopUp()}},{key:"render",value:function(){var e=this,t=P.map((function(e){return Object(m.jsx)("option",{children:e},e)})),a=null;return"importDegreeRequirements"===this.props.modalType?a=Object(m.jsxs)("div",{className:"modal",id:"import",header:"Import",children:[Object(m.jsxs)("p",{id:"modalDialogMessage",children:[Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("button",{className:"modalButton",onClick:(this.handleImportDegreeRequirements,this.props.hideModalDialogPopUp),children:"Import"})}),"\xa0\xa0\xa0\xa0\xa0",Object(m.jsx)("button",{className:"modalButton",modal:"close",onClick:this.props.hideModalDialogPopUp,children:"Cancel"})]}):"importCourseInformation"===this.props.modalType?a=Object(m.jsxs)("div",{id:"modalCourseInfo",className:"modal",header:"Import",children:[Object(m.jsxs)("p",{id:"modalDialogMessage",children:[Object(m.jsx)("br",{}),"Choose .txt file to import:"]}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"file",accept:".txt",id:"scrapeCourseInfoFileButton",onChange:this.onFileChange}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("p",{children:["Specify semester/year:",Object(m.jsxs)("select",{id:"semesterSelectCourseScrape",className:"dropdownSelect",onChange:function(t){e.setState({departmentToParseSemester:t.target.value})},children:[Object(m.jsx)("option",{value:"Fall",children:"Fall"}),Object(m.jsx)("option",{value:"Winter",children:"Winter"}),Object(m.jsx)("option",{value:"Spring",children:"Spring"}),Object(m.jsx)("option",{value:"Summer",children:"Summer1"}),Object(m.jsx)("option",{value:"Summer",children:"Summer2"})]}),Object(m.jsxs)("select",{id:"yearSelectCourseScrape",className:"dropdownSelect",onChange:function(t){e.setState({departmentToParseYear:t.target.value})},children:[Object(m.jsx)("option",{value:"2021",children:"2021"}),Object(m.jsx)("option",{value:"2020",children:"2020"}),Object(m.jsx)("option",{value:"2019",children:"2019"}),Object(m.jsx)("option",{value:"2018",children:"2018"}),Object(m.jsx)("option",{value:"2017",children:"2017"}),Object(m.jsx)("option",{value:"2016",children:"2016"}),Object(m.jsx)("option",{value:"2015",children:"2015"}),Object(m.jsx)("option",{value:"2014",children:"2014"}),Object(m.jsx)("option",{value:"2013",children:"2013"}),Object(m.jsx)("option",{value:"2012",children:"2012"}),Object(m.jsx)("option",{value:"2011",children:"2011"}),Object(m.jsx)("option",{value:"2010",children:"2010"}),Object(m.jsx)("option",{value:"2009",children:"2009"}),Object(m.jsx)("option",{value:"2008",children:"2008"}),Object(m.jsx)("option",{value:"2007",children:"2007"}),Object(m.jsx)("option",{value:"2006",children:"2006"}),Object(m.jsx)("option",{value:"2005",children:"2005"}),Object(m.jsx)("option",{value:"2004",children:"2004"}),Object(m.jsx)("option",{value:"2003",children:"2003"}),Object(m.jsx)("option",{value:"2002",children:"2002"}),Object(m.jsx)("option",{value:"2001",children:"2001"}),Object(m.jsx)("option",{value:"2000",children:"2000"}),Object(m.jsx)("option",{value:"1999",children:"1999"}),Object(m.jsx)("option",{value:"1998",children:"1998"}),Object(m.jsx)("option",{value:"1997",children:"1997"}),Object(m.jsx)("option",{value:"1996",children:"1996"}),Object(m.jsx)("option",{value:"1995",children:"1995"}),Object(m.jsx)("option",{value:"1994",children:"1994"}),Object(m.jsx)("option",{value:"1993",children:"1993"}),Object(m.jsx)("option",{value:"1992",children:"1992"}),Object(m.jsx)("option",{value:"1991",children:"1991"}),Object(m.jsx)("option",{value:"1990",children:"1990"})]})]}),Object(m.jsxs)("p",{children:["Select one or all departments to scrape:",Object(m.jsx)("select",{id:"scrapeCourseInfoDepartmentSelection",className:"dropdownSelect",onChange:function(t){e.setState({departmentToParse:t.target.value})},children:t})]}),Object(m.jsx)("br",{}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("button",{className:"modalButton",onClick:this.handleImportCourseInformation,children:"Import"})}),"\xa0\xa0\xa0\xa0\xa0",Object(m.jsx)("button",{className:"modalButton",modal:"close",onClick:this.props.hideModalDialogPopUp,children:"Cancel"})]}):"importCourseOfferings"===this.props.modalType?a=Object(m.jsxs)("div",{className:"modal",id:"import",header:"Import",children:[Object(m.jsxs)("p",{id:"modalDialogMessage",children:[Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(f.a,{label:"Choose file to import: ",onFileLoaded:this.handleImportCourseOfferingsFile,parserOptions:M}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("button",{className:"modalButton",onClick:this.handleImportCourseOfferings,children:"Import"})}),"\xa0\xa0\xa0\xa0\xa0",Object(m.jsx)("button",{className:"modalButton",modal:"close",onClick:this.props.hideModalDialogPopUp,children:"Cancel"})]}):"importStudentData"===this.props.modalType?a=Object(m.jsxs)("div",{className:"modal",id:"import",header:"Import",children:[Object(m.jsxs)("p",{id:"modalDialogMessage",children:[Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(f.a,{label:"Choose student profile file to import: ",onFileLoaded:this.handleImportStudentDataFile,parserOptions:M}),Object(m.jsx)(f.a,{label:"Choose student course plan file to import: ",onFileLoaded:this.handleImportStudentDataCoursePlansFile,parserOptions:M}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("button",{className:"modalButton",onClick:this.handleImportStudentData,children:"Import"})}),"\xa0\xa0\xa0\xa0\xa0",Object(m.jsx)("button",{className:"modalButton",modal:"close",onClick:this.props.hideModalDialogPopUp,children:"Cancel"})]}):"importGrades"===this.props.modalType?a=Object(m.jsxs)("div",{className:"modal",id:"import",header:"Import",children:[Object(m.jsxs)("p",{id:"modalDialogMessage",children:[Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(f.a,{label:"Choose file to import: ",onFileLoaded:this.handleImportGradesFile,parserOptions:M}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("button",{className:"modalButton",onClick:this.handleImportGrades,children:"Import"})}),"\xa0\xa0\xa0\xa0\xa0",Object(m.jsx)("button",{className:"modalButton",modal:"close",onClick:this.props.hideModalDialogPopUp,children:"Cancel"})]}):"addStudent"===this.props.modalType?a=Object(m.jsxs)("div",{className:"modal",id:"addStudent",header:"Add",children:[Object(m.jsxs)("p",{id:"modalDialogMessage",children:["Do you want to add this student?",Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("button",{className:"modalButton",onClick:this.props.addStudent,children:"Yes"})}),"\xa0\xa0\xa0\xa0\xa0",Object(m.jsx)("button",{className:"modalButton",modal:"close",onClick:this.props.hideModalDialogPopUp,children:"No"})]}):"cancelAddStudent"===this.props.modalType?a=Object(m.jsxs)("div",{className:"modal",id:"cancelAddStudent",header:"Cancel",children:[Object(m.jsxs)("p",{id:"modalDialogMessage",children:["Cancel adding student?",Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("button",{className:"modalButton",onClick:this.props.hideModalDialogPopUp,children:"Yes"})}),"\xa0\xa0\xa0\xa0\xa0",Object(m.jsx)("button",{className:"modalButton",modal:"close",onClick:this.props.hideModalDialogPopUp,children:"No"})]}):"deleteAllStudents"===this.props.modalType&&(a=Object(m.jsxs)("div",{className:"modal",id:"deleteAllStudents",header:"Cancel",children:[Object(m.jsxs)("p",{id:"modalDialogMessage",children:["Delete all students?",Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("button",{className:"modalButton",onClick:this.props.deleteAllStudents,children:"Yes"})}),"\xa0\xa0\xa0\xa0\xa0",Object(m.jsx)("button",{className:"modalButton",modal:"close",onClick:this.props.hideModalDialogPopUp,children:"No"})]})),Object(m.jsx)("div",{children:Object(m.jsx)("div",{id:"modal_background",children:a})})}}]),a}(o.a.Component),E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).showModalDialogPopUp=function(e){n.setState({modalType:e,showModalDialogPopup:!0})},n.hideModalDialogPopUp=function(){n.setState({showModalDialogPopup:!1})},n.state={showModalDialogPopup:!1,modalType:"none"},n}return Object(l.a)(a,[{key:"deleteAllStudents",value:function(){var e=this;I.deleteAll().then((function(t){console.log(t.data),e.setState({showModalDialogPopup:!1})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[this.state.showModalDialogPopup?Object(m.jsx)(B,{modalType:this.state.modalType,hideModalDialogPopUp:this.hideModalDialogPopUp.bind(this),deleteAllStudents:this.deleteAllStudents.bind(this)}):null,Object(m.jsxs)("div",{id:"GPDHomepageScreen",children:[Object(m.jsxs)("div",{class:"dropdown",children:[Object(m.jsx)("button",{class:"dropbtn",children:"Import"}),Object(m.jsxs)("div",{class:"dropdown-content",children:[Object(m.jsx)("a",{href:"#",onClick:function(){return e.showModalDialogPopUp("importDegreeRequirements")},children:"Degree Requirements"}),Object(m.jsx)("a",{href:"#",onClick:function(){return e.showModalDialogPopUp("importCourseInformation")},children:"Course Information"}),Object(m.jsx)("a",{href:"#",onClick:function(){return e.showModalDialogPopUp("importCourseOfferings")},children:"Course Offerings"}),Object(m.jsx)("a",{href:"#",onClick:function(){return e.showModalDialogPopUp("importStudentData")},children:"Student Data"}),Object(m.jsx)("a",{href:"#",onClick:function(){return e.showModalDialogPopUp("importGrades")},children:"Grades"})]})]}),Object(m.jsx)("a",{href:"/addStudent",children:Object(m.jsx)(i.b,{to:{pathname:"/addStudent"},children:Object(m.jsx)("button",{className:"GPDHomepageButton",children:"Add Student"})})}),Object(m.jsx)("button",{className:"GPDHomepageButton",onClick:function(){return e.showModalDialogPopUp("deleteAllStudents")},children:" Delete All Student Data"})]})]})}}]),a}(n.Component),T=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).showModalDialogPopUp=function(e){n.setState({modalType:e,showModalDialogPopup:!0})},n.hideModalDialogPopUp=function(){n.setState({showModalDialogPopup:!1})},n.state={department:"AMS",showModalDialogPopup:!1,modalType:"none",firstName:"",lastName:"",id:"",email:"",track:"",entrySemester:"Fall",entryYear:"2021"},n}return Object(l.a)(a,[{key:"addStudent",value:function(){var e=this,t={studentID:this.state.id,firstName:this.state.firstName,lastName:this.state.lastName,nSemestersInProgram:0,email:this.state.email,departmentID:this.state.department,entrySemester:this.state.entrySemester,entryYear:this.state.entryYear};I.create(t).then((function(t){e.setState({studentID:t.data.studentID,firstName:t.data.firstName,lastName:t.data.lastName,nSemestersInProgram:t.nSemestersInProgram,email:t.data.email,departmentID:t.data.departmentID,entrySemester:t.data.entrySemester,entryYear:t.data.entryYear}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=null,a=null;return"AMS"===this.state.department?t=["Computational Applied Mathematics","Computational Biology","Operations Research","Statistics","Quantitative Finance"]:"BMI"===this.state.department?t=["Clinical Informatics","Imaging Informatics","Translational Bioinformatics"]:("ESE"===this.state.department||"CSE"===this.state.department)&&(t=["None"]),t&&(a=t.map((function(e){return Object(m.jsx)("option",{children:e},e)}))),Object(m.jsxs)("div",{children:[this.state.showModalDialogPopup?Object(m.jsx)(B,{modalType:this.state.modalType,hideModalDialogPopUp:this.hideModalDialogPopUp.bind(this),addStudent:this.addStudent.bind(this)}):null,Object(m.jsxs)("div",{id:"addStudentForm",children:[Object(m.jsx)("h2",{id:"addStudentFormHeader",children:"Student Information"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"addStudent_prompt",children:"First Name:"}),Object(m.jsx)("input",{className:"addStudent_input",type:"input",onChange:function(t){e.setState({firstName:t.target.value})}}),Object(m.jsx)("div",{className:"addStudent_prompt",children:"Last Name:"}),Object(m.jsx)("input",{className:"addStudent_input",type:"input",onChange:function(t){e.setState({lastName:t.target.value})}}),Object(m.jsx)("div",{className:"addStudent_prompt",children:"SBU ID:"}),Object(m.jsx)("input",{className:"addStudent_input",type:"input",onChange:function(t){e.setState({id:t.target.value})}}),Object(m.jsx)("div",{className:"addStudent_prompt",children:"Email:"}),Object(m.jsx)("input",{className:"addStudent_input",type:"input",onChange:function(t){e.setState({email:t.target.value})}}),Object(m.jsx)("div",{className:"addStudent_prompt",children:"Department:"}),Object(m.jsxs)("select",{id:"departmentSelect",className:"dropdownSelect",onChange:function(t){e.setState({department:t.target.value})},children:[Object(m.jsx)("option",{value:"AMS",children:"AMS"}),Object(m.jsx)("option",{value:"BMI",children:"BMI"}),Object(m.jsx)("option",{value:"ESE",children:"ESE"}),Object(m.jsx)("option",{value:"CSE",children:"CSE"})]}),Object(m.jsx)("div",{className:"addStudent_prompt",children:"Track:"}),Object(m.jsx)("select",{id:"semesterSelect",className:"dropdownSelect",onChange:function(t){e.setState({track:t.target.value})},children:a}),Object(m.jsx)("div",{className:"addStudent_prompt",children:"Entry Semester:"}),Object(m.jsxs)("select",{id:"semesterSelect",className:"dropdownSelect",onChange:function(t){e.setState({entrySemester:t.target.value})},children:[Object(m.jsx)("option",{value:"Fall",children:"Fall"}),Object(m.jsx)("option",{value:"Winter",children:"Winter"}),Object(m.jsx)("option",{value:"Spring",children:"Spring"}),Object(m.jsx)("option",{value:"Summer",children:"Summer1"}),Object(m.jsx)("option",{value:"Summer",children:"Summer2"})]})]}),Object(m.jsx)("div",{className:"addStudent_prompt",children:"Entry Year:"}),Object(m.jsxs)("select",{id:"entryYearSelect",className:"dropdownSelect",onChange:function(t){e.setState({entryYear:t.target.value})},children:[Object(m.jsx)("option",{value:"2021",children:"2021"}),Object(m.jsx)("option",{value:"2020",children:"2020"}),Object(m.jsx)("option",{value:"2019",children:"2019"}),Object(m.jsx)("option",{value:"2018",children:"2018"}),Object(m.jsx)("option",{value:"2017",children:"2017"}),Object(m.jsx)("option",{value:"2016",children:"2016"}),Object(m.jsx)("option",{value:"2015",children:"2015"}),Object(m.jsx)("option",{value:"2014",children:"2014"}),Object(m.jsx)("option",{value:"2013",children:"2013"}),Object(m.jsx)("option",{value:"2012",children:"2012"}),Object(m.jsx)("option",{value:"2011",children:"2011"}),Object(m.jsx)("option",{value:"2010",children:"2010"}),Object(m.jsx)("option",{value:"2009",children:"2009"}),Object(m.jsx)("option",{value:"2008",children:"2008"}),Object(m.jsx)("option",{value:"2007",children:"2007"}),Object(m.jsx)("option",{value:"2006",children:"2006"}),Object(m.jsx)("option",{value:"2005",children:"2005"}),Object(m.jsx)("option",{value:"2004",children:"2004"}),Object(m.jsx)("option",{value:"2003",children:"2003"}),Object(m.jsx)("option",{value:"2002",children:"2002"}),Object(m.jsx)("option",{value:"2001",children:"2001"}),Object(m.jsx)("option",{value:"2000",children:"2000"}),Object(m.jsx)("option",{value:"1999",children:"1999"}),Object(m.jsx)("option",{value:"1998",children:"1998"}),Object(m.jsx)("option",{value:"1997",children:"1997"}),Object(m.jsx)("option",{value:"1996",children:"1996"}),Object(m.jsx)("option",{value:"1995",children:"1995"}),Object(m.jsx)("option",{value:"1994",children:"1994"}),Object(m.jsx)("option",{value:"1993",children:"1993"}),Object(m.jsx)("option",{value:"1992",children:"1992"}),Object(m.jsx)("option",{value:"1991",children:"1991"}),Object(m.jsx)("option",{value:"1990",children:"1990"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{id:"addStudentForm_submit_button",className:"addStudent_button",onClick:function(){return e.showModalDialogPopUp("addStudent")},children:"Add Student"}),Object(m.jsx)("button",{id:"addStudentForm_cancel_button",className:"addStudent_button",onClick:function(){return e.showModalDialogPopUp("cancelAddStudent")},children:"Cancel"})]})]})}}]),a}(n.Component),A=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"right",children:[Object(m.jsx)(i.c,{to:"/",children:Object(m.jsx)("button",{id:"homeButton",className:"navBarButtons",children:"Home"})}),Object(m.jsx)(i.c,{to:"/",children:Object(m.jsx)("button",{id:"logOutButton",className:"navBarButtons",children:"Log Out"})})]})}}]),a}(o.a.Component),k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=Object(m.jsx)(A,{});return Object(m.jsx)("nav",{id:"navbar",className:"banner",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("b",{id:"logo",children:"MAST"}),e]})})}}]),a}(o.a.Component),w=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsx)(i.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(k,{}),Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"/login",component:b}),Object(m.jsx)(j.a,{exact:!0,path:"/",component:E}),Object(m.jsx)(j.a,{exact:!0,path:"/addStudent",component:T})]})]})})}}]),a}(n.Component);a(64),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(m.jsx)(i.a,{children:Object(m.jsx)(w,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[65,1,2]]]);
//# sourceMappingURL=main.971d16bf.chunk.js.map