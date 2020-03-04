import { Component, OnInit } from "@angular/core";
import { GlobalService } from 'src/app/global.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DashboardService } from '../dashboard.service';

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"]
})

export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	loading = false;
	submitted = false;
	returnUrl: string;

	  globals: GlobalService
	constructor(public global: GlobalService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, public dashboardService: DashboardService, public httpClient: HttpClient) {
		  this.globals = global
		  
	}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]

		});
	}
	get f() { return this.loginForm.controls; }

	postlogin() {
		this.dashboardService.getLoginData()
		console.log();
		
	}
	
	// onSubmit() {
		
	// 	if (this.loginForm.valid) {
	// 		this.submitted = true;
	// 		console.log(this.loginForm.value);
	// 		const data = this.loginForm.value;
	// 		const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	// 		this.httpClient.post("http://localhost:3000/account", data).subscribe(
	// 			res => {
	// 				console.log(res);
	// 				  console.log("click logged in");
	// 				 this.globals.updatedAuthState(true);
	// 				this.router.navigate(['/']);
	// 			},
	// 			err => {
	// 				console.log('err:' + err);
	// 				this.loading = false;
	// 			}
	// 		);

	// 		if (this.loginForm.invalid) {
	// 			return;
				
	// 		}
	// 	}	
		
	
	// };

	onSubmit() {
		this.submitted = true;
		if(this.loginForm.invalid){
			return;

		}
		

	}


}
