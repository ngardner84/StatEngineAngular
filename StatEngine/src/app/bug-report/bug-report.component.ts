import { Component } from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import { HttpService } from '../_services/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.css']
})
export class BugReportComponent {
  bugReportForm: FormGroup;
  message = ""
  status_checker = false
  username = ""
  constructor(private formBuilder: FormBuilder, private http: HttpService, private snackBar: MatSnackBar){
    this.bugReportForm = this.formBuilder.group({
      category:['',[Validators.required]],
      description:[''],
      reportedBy:['',],
    })

    var userDataString = localStorage.getItem("userData");
    var userData = JSON.parse(userDataString);
    this.username = userData.username;
    this.bugReportForm.value.reportedBy = this.username;
  }



  onSubmit() {
    var newBugReport = {
      category: this.bugReportForm.value.category,
      description: this.bugReportForm.value.description,
      reportedBy: this.username,
    }
    this.http.bugReport(newBugReport).subscribe(
      data=>{
        // console.log("HERE -->", data);
        if ( data == "Submitted" ) {
          // console.log("inside no data") //used for testing
          this.bugReportForm.reset(this.bugReportForm);
          this.snackBar.open("Submitted!","",{duration:2000});
          console.log("Submitted to the backend")
        }
        else{

          console.log("Failed to submit bug report form")
          this.snackBar.open("Failed to submit, Try again","",{duration:2000});
        }
      },
    
    )
  }
}
