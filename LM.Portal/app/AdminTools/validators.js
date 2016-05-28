System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    // SINGLE FIELD VALIDATORS
    function emailValidator(control) {
        var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value && !emailRegexp.test(control.value)) {
            return { invalidEmail: true };
        }
    }
    exports_1("emailValidator", emailValidator);
    //CONTROL GROUP VALIDATORS
    function matchingPasswords(passwordKey, confirmPasswordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            var confirmPassword = group.controls[confirmPasswordKey];
            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        };
    }
    exports_1("matchingPasswords", matchingPasswords);
    //PASSWORD STRENGTH
    function passwordStrength(control) {
        //do something
        var len = control.value;
        if (len.length > 8) {
            return { strength: "strong" };
        }
        else if (len.length > 3) {
            return { strength: "medium" };
        }
        else {
            return { strength: "weak" };
        }
        //if (len.length > 8) {
        //    return [{ strength: "strong" }, {valid:true}]
        //} else if (len.length > 3) {
        //    return [{ strength: "medium" }, { valid: true }]
        //} else {
        //    return [{ strength: "weak" }, { valid: true }]
        //}
    }
    exports_1("passwordStrength", passwordStrength);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=validators.js.map