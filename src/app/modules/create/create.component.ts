import { Component, OnInit } from "@angular/core";
import { DashboardService } from '../dashboard.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/_helpers/must-match.validator';
import { validateBasis } from '@angular/flex-layout';

declare var Messenger: any;

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})

export class CreateComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private dashboardService: DashboardService, private httpClient: HttpClient) { }
  ngOnInit() {
	this.addForm = this.formBuilder.group({
		name: ['', Validators.required],
		contact: ['', [Validators.required, Validators.pattern('^[6-9]\d{9}$')]],
		email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
		address: ['', Validators.required],
		rr_no: ['', Validators.required]
	});

  }
  get f() { return this.addForm.controls; }

  postConsumerList() {
		this.dashboardService.createConsumerData()

		console.log();
	}

	public onSubmit(){
		if(this.addForm.valid){
			this.submitted = true;
		  console.log(this.addForm.value);
		  const data = this.addForm.value;
		  const headers=new HttpHeaders({'Content-Type':'application/json'});
		  this.httpClient.post("http://localhost:3000/consumer",data).subscribe(
			res=>{
			  console.log(res);
			},
			err=>{
			  console.log('err:'+err);
			}
		  );
		  if (this.addForm.invalid) {
			return;
		}
		alert('Your fields are Entered successfully!');
		}	else {
			this.showError()
		}	
	}
	onReset() {
        this.submitted = false;
        this.addForm.reset();
	}
	
	private showError(){

		if(!this.addForm.get('name').valid){
			console.log("Invalid NAme")
		}
	  
	}
  }



	// onSubmit() {
		
	// 	  console.log(this.addForm.value);
	// 	  if(this.addForm.valid){
		
	// 	  let data = this.addForm.value;
	// 	  let headers=new HttpHeaders({'Content-Type':'application/json'});
	// 	   this.httpClient.post("http://localhost:3000/consumer",headers,data).subscribe(
	// 	    res=>{
	// 	      console.log(res);
	// 	    },
	// 	    err=>{
	// 	      console.log('err:'+err);
	// 	    }
	// 	  );
	// 	}
	// }
 



