/*
  Custom validators to use everywhere.
*/
import {NgForm, FormBuilder, Validators, FORM_DIRECTIVES, ControlGroup, Control} from 'angular2/common';

// SINGLE FIELD VALIDATORS
export function emailValidator(control: Control): { [key: string]: any } {
    var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}

//CONTROL GROUP VALIDATORS
export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: ControlGroup): { [key: string]: any } => {
        let password = group.controls[passwordKey];
       
        let confirmPassword = group.controls[confirmPasswordKey];

        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
    }
}
//PASSWORD STRENGTH
export function passwordStrength(control: Control): { [key: string]: any } {
    //do something
    var len = control.value;  
       
    if (len.length > 8) {
        return { strength: "strong" }
    } else if (len.length > 3) {
        return { strength: "medium" }
    } else {
        return { strength: "weak" }
    }
    
    //if (len.length > 8) {
    //    return [{ strength: "strong" }, {valid:true}]
    //} else if (len.length > 3) {
    //    return [{ strength: "medium" }, { valid: true }]
    //} else {
    //    return [{ strength: "weak" }, { valid: true }]
    //}
   
}


