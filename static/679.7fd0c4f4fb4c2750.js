"use strict";(self.webpackChunkelog_web=self.webpackChunkelog_web||[]).push([[679],{5679:(B,y,s)=>{s.r(y),s.d(y,{ProfileModule:()=>Q});var P=s(6895),h=s(3060),a=s(4006),u=s(4025),e=s(4650),v=s(8276),b=s(9690),p=s(2653),g=s(4859),_=s(5938),C=s(7392),n=s(9549),w=s(4144),S=s(4385),Z=s(3848),U=s(1651),T=s(3248);let A=(()=>{class o{constructor(i){this.httpDataService=i}changePassword(i){return this.httpDataService.post("user/reset/Password",i)}}return o.\u0275fac=function(i){return new(i||o)(e.LFG(T.L))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function I(o,r){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," password is "),e.TgZ(2,"strong"),e._uU(3,"required"),e.qZA()())}function N(o,r){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Password should contain atleast one special character, upper case and number "),e.qZA())}function q(o,r){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," Confirm Password is "),e.TgZ(2,"strong"),e._uU(3,"required"),e.qZA()())}function D(o,r){1&o&&(e.TgZ(0,"mat-error"),e._uU(1," New password and Confirm Password don't match. "),e.qZA())}let F=(()=>{class o{constructor(i,t,l,m){this.formBuilder=i,this.changePasswordService=t,this.alertpopupService=l,this.storageService=m,this.logedinUserEmail=""}ngOnInit(){this.changePassword()}changePassword(){this.changePasswordForm=this.formBuilder.group({OldPassword:["",[a.kI.required]],NewPassword:["",[a.kI.required,a.kI.pattern(U.u.PasswordPattern)]],ConfirmPassword:["",[a.kI.required,a.kI.pattern(U.u.PasswordPattern)]]})}onSubmit(){const i={userId:this.storageService.getDataFromLocalStorage(u.I.USER_ID),oldPassword:this.changePasswordForm.controls.OldPassword?.value,newPassword:this.changePasswordForm.controls.NewPassword?.value};this.changePasswordService.changePassword(i).subscribe(t=>{console.log(t),this.alertpopupService.open({message:t.message?t.message:"Change Password updated successfully",action:"Ok"}),this.triggerProfile.emit()},t=>{this.alertpopupService.open({message:t.error.message?t.error.message:"Something went wrong! Please try Again",action:"Ok"})})}resetPaswordForm(){this.changePasswordForm=this.formBuilder.group({currentPassword:["",[a.kI.required]],password:["",[a.kI.required,a.kI.pattern(U.u.PasswordPattern)]],confirmPassword:["",[a.kI.required]]})}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(a.qu),e.Y36(A),e.Y36(p.z),e.Y36(b.V))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-changepassword"]],inputs:{logedinUserEmail:"logedinUserEmail"},decls:26,vars:5,consts:[[1,"select"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","placeholder","old password","input","","type","password","formControlName","OldPassword"],["matInput","","placeholder","New Password","input","","type","password","formControlName","NewPassword"],[4,"ngIf"],["matInput","","placeholder","Confirm Password","input","","type","password","formControlName","ConfirmPassword"],[1,"d-flex","justify-content-end"],["mat-raised-button","",1,"btn"],["mat-raised-button","","type","submit","color","primary",1,"btm"]],template:function(i,t){if(1&i&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(2,"div")(3,"mat-form-field",2)(4,"mat-label"),e._uU(5,"Old Password"),e.qZA(),e._UZ(6,"input",3),e.qZA()(),e.TgZ(7,"div")(8,"mat-form-field",2)(9,"mat-label"),e._uU(10,"New Password"),e.qZA(),e._UZ(11,"input",4),e.YNc(12,I,4,0,"mat-error",5),e.YNc(13,N,2,0,"mat-error",5),e.qZA()(),e.TgZ(14,"div")(15,"mat-form-field",2)(16,"mat-label"),e._uU(17,"Confirm Password"),e.qZA(),e._UZ(18,"input",6),e.YNc(19,q,4,0,"mat-error",5),e.YNc(20,D,2,0,"mat-error",5),e.qZA()(),e.TgZ(21,"div",7)(22,"button",8),e._uU(23," Cancel "),e.qZA(),e.TgZ(24,"button",9),e._uU(25," Save "),e.qZA()()()()),2&i){let l,m,c,f;e.xp6(1),e.Q6J("formGroup",t.changePasswordForm),e.xp6(11),e.Q6J("ngIf",null==(l=t.changePasswordForm.get("NewPassword"))?null:l.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(m=t.changePasswordForm.get("NewPassword"))?null:m.hasError("pattern")),e.xp6(6),e.Q6J("ngIf",null==(c=t.changePasswordForm.get("ConfirmPassword"))?null:c.hasError("required")),e.xp6(1),e.Q6J("ngIf",(null==(f=t.changePasswordForm.get("NewPassword"))?null:f.value)!==(null==(f=t.changePasswordForm.get("confirmPassword"))?null:f.value))}},dependencies:[P.O5,g.lW,n.TO,n.KE,n.hX,w.Nt,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u],styles:["mat-form-field[_ngcontent-%COMP%]{width:40%}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.example-flex-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}"]}),o})();var d=s(1948);let R=(()=>{class o{constructor(i,t,l){this.formBuilder=i,this.profileService=t,this.alertpopupService=l,this.triggerProfile=new e.vpe}ngOnInit(){this.notificationReport()}ngOnChanges(){this.notifications&&this.notificationRepotsForm.patchValue({allnewactivity:this.notifications?.allNewActivity,allnewactivityreply:this.notifications?.allActivityRepaly,allactivitystatus:this.notifications?.allActivityStatusChange})}notificationReport(){this.notificationRepotsForm=this.formBuilder.group({allnewactivity:[!1,[a.kI.required]],allnewactivityreply:[!1,[a.kI.required]],allactivitystatus:[!1,[a.kI.required]]})}onSubmit(){this.loggedInUserDetails._id&&this.profileService.updateNotifications(this.loggedInUserDetails._id,{allNewActivity:this.notificationRepotsForm.value.allnewactivity,allActivityRepaly:this.notificationRepotsForm.value.allnewactivityreply,allActivityStatusChange:this.notificationRepotsForm.value.allactivitystatus,_id:this.loggedInUserDetails._id}).subscribe(t=>{this.alertpopupService.open({message:t.message?t.message:"Notifications updated successfully",action:"Ok"}),this.triggerProfile.emit()},t=>{this.alertpopupService.open({message:t.error.message?t.error.message:"Something went wrong! Please try Again",action:"Ok"})})}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(a.qu),e.Y36(v.H),e.Y36(p.z))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-notifications"]],inputs:{notifications:"notifications",loggedInUserDetails:"loggedInUserDetails"},outputs:{triggerProfile:"triggerProfile"},features:[e.TTD],decls:36,vars:7,consts:[["aria-label","Select an option"],[3,"formGroup","ngSubmit"],["aria-label","","formControlName","allnewactivity","layout","row"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-8"],[3,"value"],["aria-label","","formControlName","allnewactivityreply","layout","row"],["aria-label","","formControlName","allactivitystatus","layout","row"],[1,"d-flex","justify-content-end","align-items-center"],["mat-raised-button","",1,"btn"],["mat-raised-button","","color","primary","type","submit"]],template:function(i,t){1&i&&(e.TgZ(0,"h1"),e._uU(1,"Send me Email Notifications"),e.qZA(),e.TgZ(2,"mat-radio-group",0)(3,"form",1),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(4,"mat-radio-group",2)(5,"div",3)(6,"mat-label",4),e._uU(7,"All New Activity:"),e.qZA(),e.TgZ(8,"div",5)(9,"mat-radio-button",6),e._uU(10,"Yes"),e.qZA(),e.TgZ(11,"mat-radio-button",6),e._uU(12,"No"),e.qZA()()()(),e.TgZ(13,"mat-radio-group",7)(14,"div",3)(15,"mat-label",4),e._uU(16,"All Activity Reply & Comment:"),e.qZA(),e.TgZ(17,"div",5)(18,"mat-radio-button",6),e._uU(19,"Yes"),e.qZA(),e.TgZ(20,"mat-radio-button",6),e._uU(21,"No"),e.qZA()()()(),e.TgZ(22,"mat-radio-group",8)(23,"div",3)(24,"mat-label",4),e._uU(25,"All Activity Status Change:"),e.qZA(),e.TgZ(26,"div",5)(27,"mat-radio-button",6),e._uU(28,"Yes"),e.qZA(),e.TgZ(29,"mat-radio-button",6),e._uU(30,"No"),e.qZA()()()(),e.TgZ(31,"div",9)(32,"button",10),e._uU(33," CANCEL "),e.qZA(),e.TgZ(34,"button",11),e._uU(35," Update "),e.qZA()()()()),2&i&&(e.xp6(3),e.Q6J("formGroup",t.notificationRepotsForm),e.xp6(6),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(7),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(7),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1))},dependencies:[g.lW,n.hX,d.VQ,d.U0,a._Y,a.JJ,a.JL,a.sg,a.u],styles:["mat-form-field[_ngcontent-%COMP%]{width:40%}mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}"]}),o})(),J=(()=>{class o{constructor(i,t,l){this.formBuilder=i,this.alertpopupService=t,this.profileService=l,this.triggerProfile=new e.vpe}ngOnInit(){this.emailReports()}ngOnChanges(){this.emailReportsData&&this.emailRepotsForm.patchValue({weeklyUsage:this.emailReportsData?.weeklyUsage,activityStatus:this.emailReportsData?.activityStatus,activitydue:this.emailReportsData?.activitydue,sendMeEmail:this.emailReportsData?.sendMeEmail})}emailReports(){this.emailRepotsForm=this.formBuilder.group({weeklyUsage:[!1,[a.kI.required]],activityStatus:["None",[a.kI.required]],activitydue:[!1,[a.kI.required]],sendMeEmail:[!1,[a.kI.required]]})}onSubmit(){this.loggedInUserDetails._id&&this.profileService.updateEmailReport(this.loggedInUserDetails._id,{weeklyUsage:this.emailRepotsForm.value.weeklyUsage,activityStatus:this.emailRepotsForm.value.activityStatus,activitydue:this.emailRepotsForm.value.activitydue,sendMeEmail:this.emailRepotsForm.value.sendMeEmail,_id:this.loggedInUserDetails._id}).subscribe(t=>{this.alertpopupService.open({message:t.message?t.message:"Email Reports updated successfully",action:"Ok"}),this.triggerProfile.emit()},t=>{this.alertpopupService.open({message:t.error.message?t.error.message:"Something went wrong! Please try Again",action:"Ok"})})}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(a.qu),e.Y36(p.z),e.Y36(v.H))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-email-reports"]],inputs:{emailReportsData:"emailReportsData",loggedInUserDetails:"loggedInUserDetails"},outputs:{triggerProfile:"triggerProfile"},features:[e.TTD],decls:51,vars:7,consts:[["aria-label","Select an option"],[3,"formGroup","ngSubmit"],["aria-label","","formControlName","weeklyUsage"],[1,"row","mb-3"],[1,"col-sm-2","col-form-label"],[1,"col-sm-10"],[3,"value"],["aria-label","","formControlName","activityStatus"],["value","Daily"],["value","Weekly"],["value","Monthly"],["value","None"],["aria-label","","formControlName","activitydue"],["aria-label","","formControlName","sendMeEmail"],[1,"d-flex","justify-content-end","align-items-center"],["type","submit","mat-raised-button","",1,"btn"],["type","submit","mat-raised-button","","color","primary",1,"btn"]],template:function(i,t){1&i&&(e.TgZ(0,"h1"),e._uU(1,"Send me Email Reports"),e.qZA(),e.TgZ(2,"mat-radio-group",0)(3,"form",1),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(4,"mat-radio-group",2)(5,"div",3)(6,"mat-label",4),e._uU(7,"Weekly Usage:"),e.qZA(),e.TgZ(8,"div",5)(9,"mat-radio-button",6),e._uU(10,"Yes"),e.qZA(),e.TgZ(11,"mat-radio-button",6),e._uU(12,"No"),e.qZA()()()(),e.TgZ(13,"mat-radio-group",7)(14,"div",3)(15,"mat-label",4),e._uU(16,"Activity Status:"),e.qZA(),e.TgZ(17,"div",5)(18,"mat-radio-button",8),e._uU(19,"Daily"),e.qZA(),e.TgZ(20,"mat-radio-button",9),e._uU(21,"Weekly"),e.qZA(),e.TgZ(22,"mat-radio-button",10),e._uU(23,"Monthly"),e.qZA(),e.TgZ(24,"mat-radio-button",11),e._uU(25,"None"),e.qZA()()()(),e.TgZ(26,"mat-radio-group",12)(27,"div",3)(28,"mat-label",4),e._uU(29,"Activity Due (daily):"),e.qZA(),e.TgZ(30,"div",5)(31,"mat-radio-button",6),e._uU(32,"Yes"),e.qZA(),e.TgZ(33,"mat-radio-button",6),e._uU(34,"No"),e.qZA()()()(),e.TgZ(35,"h1"),e._uU(36,"Daily Update Report"),e.qZA(),e.TgZ(37,"mat-radio-group",13)(38,"div",3)(39,"mat-label",4),e._uU(40,"Send me Email:"),e.qZA(),e.TgZ(41,"div",5)(42,"mat-radio-button",6),e._uU(43,"Yes"),e.qZA(),e.TgZ(44,"mat-radio-button",6),e._uU(45,"No"),e.qZA()()()(),e.TgZ(46,"div",14)(47,"button",15),e._uU(48," CANCEL "),e.qZA(),e.TgZ(49,"button",16),e._uU(50," Update "),e.qZA()()()()),2&i&&(e.xp6(3),e.Q6J("formGroup",t.emailRepotsForm),e.xp6(6),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(20),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1),e.xp6(9),e.Q6J("value",!0),e.xp6(2),e.Q6J("value",!1))},dependencies:[g.lW,n.hX,d.VQ,d.U0,a._Y,a.JJ,a.JL,a.sg,a.u],styles:[".mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}"]}),o})();function k(o,r){1&o&&(e.TgZ(0,"mat-icon"),e._uU(1,"lock_open"),e.qZA(),e._uU(2," ChangePassword "))}function E(o,r){1&o&&(e.TgZ(0,"mat-icon"),e._uU(1,"wb_incandescent"),e.qZA(),e._uU(2," Notifications "))}function Y(o,r){1&o&&(e.TgZ(0,"mat-icon"),e._uU(1,"email"),e.qZA(),e._uU(2," Email Reports "))}const O=[{path:"",component:(()=>{class o{constructor(i,t,l,m,c){this.formBuilder=i,this.router=t,this.profileService=l,this.storageService=m,this.alertpopupService=c,this.loggedInUserEmail=""}ngOnInit(){this.getProfileByUserId(),this.profileFormValues(),this.getUserByUserID()}profileFormValues(){this.profileForm=this.formBuilder.group({Name:["",a.kI.required],email:["",a.kI.required],shortName:["",a.kI.required],timeZone:["",a.kI.required]})}getUserByUserID(){this.profileService.getUserById(this.storageService.getDataFromLocalStorage(u.I.USER_ID)).subscribe(i=>{this.loggedInUserDetails=i?.existingUser,this.profileForm.controls.Name.setValue(this.loggedInUserDetails.Name),this.profileForm.controls.email.setValue(this.loggedInUserDetails.email),this.loggedInUserEmail=this.loggedInUserDetails?.email})}getProfileByUserId(){this.profileService.getProfileByUserId(this.storageService.getDataFromLocalStorage(u.I.USER_ID)).subscribe(i=>{this.profileDetails=i.profile,this.emailReports=i?.profile.emailReports,this.notifications=i?.profile.notifications,this.profileForm.controls.shortName.setValue(this.profileDetails.shortName),this.profileForm.controls.timeZone.setValue(this.profileDetails.timeZone),this.profileForm.controls.email.setValue(this.profileDetails.email)},i=>{console.log(i)})}createProfile(){const i={...this.profileForm.value,userId:this.storageService.getDataFromLocalStorage(u.I.USER_ID),timeZone:"timeZone",profileImage:"image.com"};this.profileDetails&&this.profileDetails._id?this.profileService.updateProfile(this.profileDetails._id,i).subscribe(t=>{this.alertpopupService.open({message:t.message?t.message:"Profile Updated Successfully",action:"ok"})},t=>{this.alertpopupService.open({message:t.message?t.message:"Something Faild to update Profile",action:"ok"})}):this.profileService.createProfile(i).subscribe(t=>{this.alertpopupService.open({message:t.message?t.message:"Profile Updated Successfully",action:"ok"})},t=>{this.alertpopupService.open({message:t.message?t.message:"Something Faild to update Profile",action:"ok"})})}getAllUsers(){this.profileService.getUser().subscribe(i=>{this.userTypes=i})}onSubmit(){console.log(this.profileForm.value),this.createProfile()}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(a.qu),e.Y36(h.F0),e.Y36(v.H),e.Y36(b.V),e.Y36(p.z))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile"]],decls:48,vars:6,consts:[[1,"page-wrapper"],["animationDuration","0ms"],["label","My Profile"],[1,"select"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","placeholder","Name","input","","type","text","formControlName","Name"],["matInput","","placeholder","Short Name","input","","type","text","formControlName","shortName"],["matInput","","placeholder","Email","input","","type","text","formControlName","email"],["appearance","outline",1,"w-100-per"],["formControlName","timeZone"],[1,"mb-4"],["id","input-file-id","multiple","","type","file",1,"ng-hide"],[1,"mb-4","form-check"],["type","checkbox","value","","id","flexCheckDefault",1,"form-check-input"],["for","flexCheckDefault",1,"form-check-label"],[1,"d-flex","justify-content-end"],["mat-raised-button","","mat-dialog-close","true",1,"btn"],["mat-raised-button","","color","primary","type","submit",1,"btn"],["mat-tab-label","",3,"click"],[3,"logedinUserEmail"],[3,"notifications","loggedInUserDetails","triggerProfile"],[3,"emailReportsData","loggedInUserDetails","triggerProfile"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"mat-tab-group",1)(2,"mat-tab",2)(3,"div")(4,"div",3)(5,"form",4),e.NdJ("ngSubmit",function(){return t.onSubmit()}),e.TgZ(6,"div")(7,"mat-form-field",5)(8,"mat-label"),e._uU(9,"Name"),e.qZA(),e._UZ(10,"input",6),e.qZA()(),e.TgZ(11,"div")(12,"mat-form-field",5)(13,"mat-label"),e._uU(14,"Short Name"),e.qZA(),e._UZ(15,"input",7),e.qZA()(),e.TgZ(16,"div")(17,"mat-form-field",5)(18,"mat-label"),e._uU(19,"Email"),e.qZA(),e._UZ(20,"input",8),e.qZA()(),e.TgZ(21,"mat-form-field",9)(22,"mat-label"),e._uU(23,"Time Zone"),e.qZA(),e._UZ(24,"mat-select",10),e.qZA(),e.TgZ(25,"div",11),e._UZ(26,"input",12),e.qZA(),e.TgZ(27,"div",13),e._UZ(28,"input",14),e.TgZ(29,"label",15),e._uU(30," Keep me upto date with new features "),e.qZA()(),e.TgZ(31,"div",16)(32,"button",17),e._uU(33," Cancel "),e.qZA(),e.TgZ(34,"button",18),e._uU(35," Save "),e.qZA()()()()()(),e.TgZ(36,"mat-tab"),e.YNc(37,k,3,0,"ng-template",19),e.NdJ("click",function(){return t.filters.ChangePassword}),e.TgZ(38,"div"),e._UZ(39,"app-changepassword",20),e.qZA()(),e.TgZ(40,"mat-tab"),e.YNc(41,E,3,0,"ng-template",19),e.NdJ("click",function(){return t.applyUserFilters(t.filters.Notifications)}),e.TgZ(42,"div")(43,"app-notifications",21),e.NdJ("triggerProfile",function(){return t.getProfileByUserId()}),e.qZA()()(),e.TgZ(44,"mat-tab"),e.YNc(45,Y,3,0,"ng-template",19),e.NdJ("click",function(){return t.applyUserFilters(t.filters.EmailReports)}),e.TgZ(46,"div")(47,"app-email-reports",22),e.NdJ("triggerProfile",function(){return t.getProfileByUserId()}),e.qZA()()()()()),2&i&&(e.xp6(5),e.Q6J("formGroup",t.profileForm),e.xp6(34),e.Q6J("logedinUserEmail",t.loggedInUserEmail),e.xp6(4),e.Q6J("notifications",t.notifications)("loggedInUserDetails",t.loggedInUserDetails),e.xp6(4),e.Q6J("emailReportsData",t.emailReports)("loggedInUserDetails",t.loggedInUserDetails))},dependencies:[g.lW,_.ZT,C.Hw,n.KE,n.hX,w.Nt,S.gD,Z.SP,Z.uD,Z.uX,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,F,R,J],styles:[".togle-button[_ngcontent-%COMP%]{width:100px!important;min-width:unset!important}.mat-button-toggle-checked[_ngcontent-%COMP%]{background-color:#44508d;color:#fff!important}.mat-tab-label-active[_ngcontent-%COMP%]{background-color:red}mat-form-field[_ngcontent-%COMP%]{width:40%}"]}),o})()}];let x=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.Bz.forChild(O),h.Bz]}),o})();var M=s(487);let Q=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[P.ez,x,M.m,a.UX]}),o})()}}]);