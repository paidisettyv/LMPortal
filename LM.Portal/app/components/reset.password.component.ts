import {Component} from 'angular2/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ResetPassword} from '../entities/resetPassword';
import {NgForm, FormBuilder, Validators, FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/common';
import {  matchingPasswords,passwordStrength } from '../AdminTools/validators';
@Component({
    selector: 'reset-password',
    templateUrl: './app/templates/auth/reset.password.html',    
    providers: [AuthenticationService]
})
export class ResetPasswordComponent {
    resetPasswordForm: ControlGroup;
    errorMessage: string;
   
   
    constructor(
        private _authenticationService: AuthenticationService,    
        private _router: Router,    
        private builder: FormBuilder
    ) {
        
         this.resetPasswordForm = builder.group({
            password: ['',Validators.compose([ Validators.required, passwordStrength])],
          
            confirmPassword: ['', Validators.required],           
        }, { validator: matchingPasswords('password', 'confirmPassword') });
      
    }
    reset(password) {
        this._authenticationService.resetPassword(password)
            .subscribe(
            data => {                

                this._router.navigate(['Dash']);
            },
                error => this.errorMessage = <any>error
            );
    }
}